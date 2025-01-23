'use server'

import { prisma } from '@/lib/db/prisma'
import { IActionResponse } from '@/lib/utils/response'
import { z } from 'zod'

export default async function createCV(
    customId: string,
    personalInformationElementId: string,
    aboutMeElementId: string,
): Promise<IActionResponse> {

    const customIDSchema = z.string().min(2, 'CV Name need in the min 2 characteres')

    const zodValidator = customIDSchema.safeParse(customId)

    if(!zodValidator.success) return {
        status: 'error',
        msg: zodValidator.error.issues[0].message
    }

    await prisma.cv.create({
        data: {
            customId, aboutMeElementId, personalInformationElementId,
            userId: process.env.ROOT_USER_ID
        }
    })

    return { status: 'success' }

}