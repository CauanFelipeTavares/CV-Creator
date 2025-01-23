'use client'

import Button from '@/components/micro/button'
import InputText from '@/components/micro/input-text'
import Link from 'next/link'
import signupAction from '../_actions/signup'
import { useActionState, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignupPage(){

    const router = useRouter()

    const [state, clientSignupAction, isPending] = useActionState(
        async (_previousData: any, formData: FormData) => {
            
            const response = await signupAction(formData)

            if (response?.status === 'success') router.push(`/`)
    
            return response

        },
        null,
    )

    return <form
        action={clientSignupAction}
    >
        <h1>
            Create your account
        </h1>
        <div>
            <div
                className='flex justify-start gap-1 mx-auto my-4 w-full max-w-60'
            >
                <label>
                    Name
                </label>
                <InputText
                    name='name'
                    placeholder='Cauan Felipe Tavares'
                />
            </div>
            <div
                className='flex justify-start gap-1 mx-auto my-4 w-full max-w-60'
            >
                <label>
                    Email
                </label>
                <InputText
                    name='email'
                    placeholder='user@gmail.com'
                />
            </div>
            <div
                className='flex justify-start gap-1 mx-auto my-4 w-full max-w-60'
            >
                <label>
                    Password
                </label>
                <InputText
                    name='password'
                    type='password'
                    placeholder='********'
                />
            </div>
            { state?.status == 'error' && <p className='text-red-600'>
                { state.msg }
            </p> }
            <Button
                className='w-full max-w-60'
                disabled={isPending}
            >
                Signup
            </Button>
        </div>
        <div>
            <p
                className='mt-4'
            >
                If you have a account, go to
                <Link
                    href={'/signin'}
                    className='ml-2 text-blue-600 underline'
                >
                    Signin
                </Link>
            </p>
        </div>
    </form>

}