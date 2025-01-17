import { prisma } from "@/lib/db/prisma"
import ElementHandleOptionsComponent from "./_components/ElementHandleOptions"
import { EmptyElementsComponent } from "./_components/ElementResponse"
import { IActionResponse } from "@/lib/utils/response"
import { PopupAboutMe, PopupEducation, PopupExperience, PopupPersonalInformation } from "./_components/ElementPopup"

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
                key='personalInformation'
                className='flex flex-col w-4/5 items-center bg-secundary border-primary border-2 my-2 py-4 rounded-lg'
            >
                <h2
                    className='text-left w-4/5 mb-2 text-lg'
                >
                    Personal Information
                </h2>
                { personalInformation }
            </div>
            <div
                className='flex flex-col w-4/5 items-center bg-secundary border-primary border-2 my-2 py-4 rounded-lg'
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
                className='flex flex-col w-4/5 items-center bg-secundary border-primary border-2 my-2 py-4 rounded-lg'
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
                className='flex flex-col w-4/5 items-center bg-secundary border-primary border-2 my-2 py-4 rounded-lg'
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

    async function remove(id: string): Promise<IActionResponse>{
        'use server'

        await prisma.cv_element_personalInformation.delete({
            where: { id }
        })

        return { status: 'success' }

    }

    const response = await prisma.cv_element_personalInformation.findMany({
        omit: {
            userId: true
        }
    }).catch(() => null)

    if(!response) return <p className='text-red-600 text-base'>
        Error to get data
    </p>

    if(response.length === 0) return <EmptyElementsComponent />

    return response.map(el => <div
        className='flex justify-between w-4/5 pt-4 pb-2 border-b-2 border-primary text-base'
    >
        <p>
            { el.customId }
        </p>
        <ElementHandleOptionsComponent
            elementType='personalInformation'
            elementId={el.id}
            removeFunction={remove}
            PopupElement={<PopupPersonalInformation
                key={'popupPersonalInformation'}
                customId={el.customId}
                email={el.email}
                github={el.github}
                id={el.id}
                jobTitle={el.jobTitle}
                linkedin={el.linkedin}
                location={el.location}
                name={el.name}
                phoneNumber={el.phoneNumber}
                website={el.website}
            />}
        />
    </div>)

}

async function getAboutMe(){

    async function remove(id: string): Promise<IActionResponse>{
        'use server'

        await prisma.cv_element_aboutMe.delete({
            where: { id }
        })

        return { status: 'success' }

    }

    const response = await prisma.cv_element_aboutMe.findMany({
        select: {
            customId: true,
            id: true,
            description: true,
        }
    }).catch(() => null)

    if(!response) return <p className='text-red-600 text-base'>
        Error to get data
    </p>

    if(response.length === 0) return <EmptyElementsComponent />

    return response.map(el => <div
        className='flex justify-between w-4/5 pt-4 pb-2 border-b-2 border-primary text-base'
    >
        <p>
            { el.customId }
        </p>
        <ElementHandleOptionsComponent
            elementType='aboutMe'
            elementId={el.id}
            removeFunction={remove}
            PopupElement={<PopupAboutMe
                key={'popupAboutMe'}
                description={el.description}
            />}
        />
    </div>)

}

async function getExperience(){

    async function remove(id: string): Promise<IActionResponse>{
        'use server'

        await prisma.cv_element_experience.delete({
            where: { id }
        })

        return { status: 'success' }

    }

    const response = await prisma.cv_element_experience.findMany({
        omit: {
            userId: true
        }
    }).catch(() => null)

    if(!response) return <p className='text-red-600 text-base'>
        Error to get data
    </p>

    if(response.length === 0) return <EmptyElementsComponent />

    return response.map(el => <div
        className='flex justify-between w-4/5 pt-4 pb-2 border-b-2 border-primary text-base'
    >
        <p>
            { el.customId }
        </p>
        <ElementHandleOptionsComponent
            elementType='experience'
            elementId={el.id}
            removeFunction={remove}
            PopupElement={<PopupExperience
                key={'popupExperience'}
                customId={el.customId}
                description={el.description}
                finishPeriod={el.finishPeriod}
                id={el.id}
                location={el.location}
                name={el.name}
                startPeriod={el.startPeriod}
            />}
        />
    </div>)

}

async function getEducation(){

    async function remove(id: string): Promise<IActionResponse>{
        'use server'

        await prisma.cv_element_education.delete({
            where: { id }
        })

        return { status: 'success' }

    }

    const response = await prisma.cv_element_education.findMany({
        omit: {
            userId: true
        }
    }).catch(() => null)

    if(!response) return <p className='text-red-600 text-base'>
        Error to get data
    </p>

    if(response.length === 0) return <EmptyElementsComponent />

    return response.map(el => <div
        className='flex justify-between w-4/5 pt-4 pb-2 border-b-2 border-primary text-base'
    >
        <p>
            { el.customId }
        </p>
        <ElementHandleOptionsComponent
            elementType='education'
            elementId={el.id}
            removeFunction={remove}
            PopupElement={<PopupEducation
                key={'popupEducation'}
                customId={el.customId}
                description={el.description}
                finishPeriod={el.finishPeriod}
                id={el.id}
                location={el.location}
                name={el.name}
                startPeriod={el.startPeriod}
            />}
        />
    </div>)

}