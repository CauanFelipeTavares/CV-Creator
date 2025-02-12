import { prisma } from '@/lib/db/prisma'

export async function getPersonalInformation(){

    const response = await prisma.cv_element_personalInformation.findMany({
        select: {
            customId: true,
            id: true
        }
    }).catch(() => null)

    return response

}

export async function getAboutMe(){

    const response = await prisma.cv_element_aboutMe.findMany({
        select: {
            customId: true,
            id: true
        }
    }).catch(() => null)

    return response

}

export async function getExperience(){

    const response = await prisma.cv_element_experience.findMany({
        select: {
            customId: true,
            id: true
        }
    }).catch(() => null)

    return response

}

export async function getEducation(){

    const response = await prisma.cv_element_education.findMany({
        select: {
            customId: true,
            id: true
        }
    }).catch(() => null)

    return response

}

export async function getCv(
    id: string
){

    const response = await prisma.cv.findUnique({
        where: { id },
        select: {
            id: true,
            customId: true,
            aboutMeElementId: true,
            personalInformationElementId: true,
            CvEducations: {
                select: {
                    educationId: true,
                }
            },
            CvExperiences: {
                select: {
                    experienceId: true
                }
            },
        }
    }).catch(() => null)

    return response

}