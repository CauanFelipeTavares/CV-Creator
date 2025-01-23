import { prisma } from '@/lib/db/prisma'
import { ElementOption } from '../../_components/ElementsForm'
import { z } from 'zod'
import { IActionResponse } from '@/lib/utils/response'

export const aboutMeSchema = z.object({
    customId: z.string().min(3, 'Id need in the minimun 3 characteres'),
    description: z.string().min(15, 'Description need in the minimun 15 characteres')
})

export const educationSchema = z.object({
    customId: z.string().min(3, 'Id need in the minimun 3 characteres'),
    description: z.string().min(15, 'Description need in the minimun 15 characteres'),
    finishPeriod: z.string().date('Finish period need be in datetime format'),
    location: z.string().min(2, 'Location need in the minimun 2 characteres'),
    name: z.string().min(4, 'Name need in the minimun 4 characteres'),
    startPeriod: z.string().date('Start period need be in datetime format'),
})

export const experienceSchema = z.object({
    customId: z.string().min(3, 'Id need in the minimun 3 characteres'),
    description: z.string().min(15, 'Description need in the minimun 15 characteres'),
    finishPeriod: z.string().date('Finish period need be in datetime format'),
    location: z.string().min(2, 'Location need in the minimun 2 characteres'),
    name: z.string().min(4, 'Name need in the minimun 4 characteres'),
    startPeriod: z.string().date('Start period need be in datetime format'),
})

export const personalInformationSchema = z.object({
    customId: z.string().min(3, 'Id need in the minimun 3 characteres'),
    email: z.string().email('Email needs be in email format'),
    github: z.string().startsWith('https://github.com/', 'Github link needs start with https://github.com/').nullable(),
    jobTitle: z.string().min(5, 'Job title needs in the minimun 5 characteres'),
    linkedin: z.string().startsWith('https://www.linkedin.com/', 'LinkedIn link needs start with https://www.linkedin.com/').nullable(),
    location: z.string().min(2, 'Location needs in the minimun 2 characteres'),
    name: z.string().min(4, 'Name need in the minimun 4 characteres'),
    phoneNumber: z.string().min(9, 'Phone number needs in the minimum 9 characteres'),
    website: z.string().nullable(),
})

export async function submitAction(formData: FormData): Promise<IActionResponse> {
    'use server'
    // console.log({ submit: 'true' })

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
    
    await prisma.cv_element_aboutMe.create({
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
    
    await prisma.cv_element_education.create({
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
    
    await prisma.cv_element_experience.create({
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
    
    await prisma.cv_element_personalInformation.create({
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