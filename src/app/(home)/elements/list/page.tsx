import Button from "@/components/micro/button"
import { prisma } from "@/lib/db/prisma"
import ElementHandleOptionsComponent from "./_components/ElementHandleOptions"
import { EmptyElementsComponent } from "./_components/ElementResponse"

export default async function ElementListPage(){

    const personalInformation = await getPersonalInformation()
    const aboutMe = await getAboutMe()
    const experience = await getExperience()
    const education = await getEducation()

    return <>
        <div
            className='flex flex-col items-center'
        >
            <h1
                className='text-xl my-4'
            >
                Look your elements
            </h1>

            <div
                className='flex flex-col w-4/5 items-center bg-blue-950 my-2 py-4 rounded-lg'
                key='personalInformation'
            >
                <h2
                    className='text-left w-4/5 mb-2 text-lg'
                >
                    Personal Information
                </h2>
                { personalInformation }
            </div>
            <div
                className='flex flex-col w-4/5 items-center bg-blue-950 my-2 py-4 rounded-lg'
                key='aboutMe'
            >
                <h2
                    className='text-left w-4/5 my-2 text-lg'
                >
                    About Me 
                </h2>
                { aboutMe }
            </div>
            <div
                className='flex flex-col w-4/5 items-center bg-blue-950 my-2 py-4 rounded-lg'
                key='experience'
            >
                <h2
                    className='text-left w-4/5 mb-2 text-lg'
                >
                    Experience
                </h2>
                { experience }
            </div>
            <div
                className='flex flex-col w-4/5 items-center bg-blue-950 my-2 py-4 rounded-lg'
                key='education'
            >
                <h2
                    className='text-left w-4/5 mb-2 text-lg'
                >
                    Education/Certificates
                </h2>
                { education }
            </div>
        </div>
    </>

}

async function getPersonalInformation(){

    async function remove(id: string){
        'use server'

        await prisma.cv_element_personalInformation.delete({
            where: { id }
        })

    }

    const response = await prisma.cv_element_personalInformation.findMany({
        select: {
            customId: true,
            id: true,
        }
    }).catch(() => null)

    if(!response) return <p className='text-red-600 text-base'>
        Error to get data
    </p>

    if(response.length === 0) return <EmptyElementsComponent />

    return response.map(el => <div
        className='flex justify-between w-4/5 pt-4 pb-2 border-b-2 border-b-white text-base'
    >
        <p>
            { el.customId }
        </p>
        <ElementHandleOptionsComponent
            elementId={el.id}
            removeFunction={remove}
        />
    </div>)

}

async function getAboutMe(){

    async function remove(id: string){
        'use server'

        await prisma.cv_element_aboutMe.delete({
            where: { id }
        })

    }

    const response = await prisma.cv_element_aboutMe.findMany({
        select: {
            customId: true,
            id: true
        }
    }).catch(() => null)

    if(!response) return <p className='text-red-600 text-base'>
        Error to get data
    </p>

    if(response.length === 0) return <EmptyElementsComponent />

    return response.map(el => <div
        className='flex justify-between w-4/5 pt-4 pb-2 border-b-2 border-b-white text-base'
    >
        <p>
            { el.customId }
        </p>
        <ElementHandleOptionsComponent
            elementId={el.id}
            removeFunction={remove}
        />
    </div>)

}

async function getExperience(){

    async function remove(id: string){
        'use server'

        await prisma.cv_element_experience.delete({
            where: { id }
        })

    }

    const response = await prisma.cv_element_experience.findMany({
        select: {
            customId: true,
            id: true,
        }
    }).catch(() => null)

    if(!response) return <p className='text-red-600 text-base'>
        Error to get data
    </p>

    if(response.length === 0) return <EmptyElementsComponent />

    return response.map(el => <div
        className='flex justify-between w-4/5 pt-4 pb-2 border-b-2 border-b-white text-base'
    >
        <p>
            { el.customId }
        </p>
        <ElementHandleOptionsComponent
            elementId={el.id}
            removeFunction={remove}
        />
    </div>)

}

async function getEducation(){

    async function remove(id: string){
        'use server'

        await prisma.cv_element_education.delete({
            where: { id }
        })

    }

    const response = await prisma.cv_element_education.findMany({
        select: {
            customId: true,
            id: true,
        }
    }).catch(() => null)

    if(!response) return <p className='text-red-600 text-base'>
        Error to get data
    </p>

    if(response.length === 0) return <EmptyElementsComponent />

    return response.map(el => <div
        className='flex justify-between w-4/5 pt-4 pb-2 border-b-2 border-b-white text-base'
    >
        <p>
            { el.customId }
        </p>
        <ElementHandleOptionsComponent
            elementId={el.id}
            removeFunction={remove}
        />
    </div>)

}