import Button from '@/components/micro/button'
import { prisma } from '@/lib/db/prisma'
import Link from 'next/link'
import CvFormCreate from './_components/CvFormCreate'

export default async function CreateCVPage(){

    const [
        personalInformation,
        aboutMe,
        experience,
        education,
    ] = await Promise.all([
        getPersonalInformation(),
        getAboutMe(),
        getExperience(),
        getEducation(),
    ])

    if(
        !personalInformation ||
        !aboutMe ||
        !experience ||
        !education
    ) return <p className='text-red-600'>
        Error to get data, please reload
    </p>

    return <>
        <div
            className="w-full flex flex-col mx-auto"
        >
            <CvFormCreate
                key='CvFormCreate'
                personalInformation={personalInformation}
                aboutMe={aboutMe}
                experience={experience}
                education={education}
            />
        </div>
    </>

}

async function getPersonalInformation(){

    const response = await prisma.cv_element_personalInformation.findMany({
        select: {
            customId: true,
            id: true
        }
    }).catch(() => null)

    return response

}

async function getAboutMe(){

    const response = await prisma.cv_element_aboutMe.findMany({
        select: {
            customId: true,
            id: true
        }
    }).catch(() => null)

    return response

}

async function getExperience(){

    const response = await prisma.cv_element_experience.findMany({
        select: {
            customId: true,
            id: true
        }
    }).catch(() => null)

    return response

}

async function getEducation(){

    const response = await prisma.cv_element_education.findMany({
        select: {
            customId: true,
            id: true
        }
    }).catch(() => null)

    return response

}