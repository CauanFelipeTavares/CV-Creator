import { IActionResponse } from "@/lib/utils/response"
import { aboutMeSchema, educationSchema, experienceSchema, personalInformationSchema } from "../../create/_actions"
import { prisma } from "@/lib/db/prisma"
import { ElementOption } from "../../_components/ElementsForm"

export default async function updateElementAction(formData: FormData): Promise<IActionResponse> {
    'use server'

    const data = Object.fromEntries(formData)

    const tableId = data.tableId as ElementOption

    const action = 
        tableId == 'aboutMe'
        ? aboutMeAction
        : tableId == 'education'
        ? educationAction
        : tableId == 'experience'
        ? experienceAction
        : personalInformationAction

    const actionResponse = await action(data)

    return actionResponse

}

async function aboutMeAction(data: any): Promise<IActionResponse> {

    const parsedData = aboutMeSchema.safeParse(data)

    if(!parsedData.success) return {
        status: 'error',
        msg: parsedData.error.issues[0].message
    }
    
    await prisma.cv_element_aboutMe.update({
        where: { id: data.elementId },
        data: {
            customId: parsedData.data.customId,
            description: parsedData.data.description,
            userId: process.env.ROOT_USER_ID || '',
        }
    })

    return { status: 'success' }

}

async function educationAction(data: any): Promise<IActionResponse> {

    const parsedData = educationSchema.safeParse(data)

    if(!parsedData.success) return {
        status: 'error',
        msg: parsedData.error.issues[0].message
    }
    
    await prisma.cv_element_education.update({
        where: { id: data.elementId },
        data: {
            customId: parsedData.data.customId,
            description: parsedData.data.description,
            finishPeriod: parsedData.data.finishPeriod,
            location: parsedData.data.location,
            name: parsedData.data.name,
            startPeriod: parsedData.data.startPeriod,
            userId: process.env.ROOT_USER_ID || '',
        }
    })

    return { status: 'success' }

}

async function experienceAction(data: any): Promise<IActionResponse> {

    const parsedData = experienceSchema.safeParse(data)

    if(!parsedData.success) return {
        status: 'error',
        msg: parsedData.error.issues[0].message
    }
    
    await prisma.cv_element_experience.update({
        where: { id: data.elementId },
        data: {
            customId: parsedData.data.customId,
            description: parsedData.data.description,
            finishPeriod: parsedData.data.finishPeriod,
            location: parsedData.data.location,
            name: parsedData.data.name,
            startPeriod: parsedData.data.startPeriod,
            userId: process.env.ROOT_USER_ID || '',
        }
    })

    return { status: 'success' }

}

async function personalInformationAction(data: any): Promise<IActionResponse> {

    const parsedData = personalInformationSchema.safeParse(data)

    if(!parsedData.success) return {
        status: 'error',
        msg: parsedData.error.issues[0].message
    }
    
    await prisma.cv_element_personalInformation.update({
        where: { id: data.elementId },
        data: {
            customId: parsedData.data.customId,
            email: parsedData.data.email,
            github: parsedData.data.github,
            jobTitle: parsedData.data.jobTitle,
            linkedin: parsedData.data.linkedin,
            location: parsedData.data.location,
            name: parsedData.data.name,
            phoneNumber: parsedData.data.phoneNumber,
            website: parsedData.data.website,
            userId: process.env.ROOT_USER_ID || '',
        }
    })

    return { status: 'success' }

}