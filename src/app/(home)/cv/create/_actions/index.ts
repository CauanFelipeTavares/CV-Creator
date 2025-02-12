'use server'

import { prisma } from '@/lib/db/prisma'
import { IActionResponse } from '@/lib/utils/response'
import { z } from 'zod'

export default async function createOrUpdateCV(
    customId: string,
    personalInformationElementId: string,
    aboutMeElementId: string,
    selectedExperienceIds: string[],
    selectEducationIds: string[],
    cvId?: string
): Promise<IActionResponse> {

    const customIDSchema = z.string().min(2, 'CV Name need in the min 2 characteres')

    const zodValidator = customIDSchema.safeParse(customId)

    if(!zodValidator.success) return {
        status: 'error',
        msg: zodValidator.error.issues[0].message
    }

    cvId
        ? await prisma.cv.update({ where: { id: cvId, userId: process.env.ROOT_USER_ID }, 
            data: {
                customId,
                aboutMeElementId,
                personalInformationElementId,
                CvExperiences: {
                    deleteMany: {},
                    createMany: {
                        data: selectedExperienceIds.map(experienceId => ({ experienceId }))
                    }
                },
                CvEducations: {
                    deleteMany: {},
                    createMany: {
                        data: selectEducationIds.map(educationId => ({ educationId }))
                    }
                },
            } 
        })
        : await prisma.cv.create({
            data: {
                customId,
                aboutMeElementId,
                personalInformationElementId,
                CvExperiences: {
                    create: selectedExperienceIds.map(experienceId => ({ experienceId }))
                },
                CvEducations: {
                    create: selectEducationIds.map(educationId => ({ educationId }))
                },
                userId: process.env.ROOT_USER_ID
            }
        }) 

    return { status: 'success' }

}