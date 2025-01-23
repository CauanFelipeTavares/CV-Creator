'use server'

import { prisma } from "@/lib/db/prisma"
import { IActionResponse } from "@/lib/utils/response"
import { z } from "zod"
import { hash } from 'bcrypt'

const schema = z.object({
    name: z.string().min(3, 'Name need in the min 3 characteres'),
    email: z.string().email('Email need be an valid email format'),
    password: z.string().min(6, 'Password need in the min 6 characteres')
})

// type TSignupAction = z.infer<typeof schema>

export default async function signupAction(formData: FormData): Promise<IActionResponse> {
    // 'use server'

    const data = Object.fromEntries(formData)

    const parsedData = schema.safeParse(data)

    if(!parsedData.success) return {
        status: 'error',
        msg: parsedData.error.issues[0].message
    }

    const { email, name, password } = parsedData.data

    const hashedPassword = await hash(password, 8)

    await prisma.user.create({
        data: {
            email, name, password: hashedPassword
        }
    })

    return { status: 'success' }

}