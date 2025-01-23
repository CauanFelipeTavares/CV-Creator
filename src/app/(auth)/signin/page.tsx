'use client'

import Button from '@/components/micro/button'
import InputText from '@/components/micro/input-text'
import { Fetch } from '@/lib/utils/fetch'
import { HandleFormByName, TypeInputChange } from '@/lib/utils/form'
import { IClienteResponse } from '@/lib/utils/response'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'

export default function SigninPage(){

    const router = useRouter()

    const userRef = useRef({
        email: '',
        password: '',
    })
    const [response, setResponse] = useState<IClienteResponse>({})
    
    async function handleSubmit(){

        setResponse({ statusCode: 'waiting' })
        
        const response = await Fetch('/api/auth/signin', {
            method: 'POST',
            body: userRef.current
        })

        setResponse(response)

        if(!response.isError){

            localStorage.setItem('jwt_token', response.data.token)
            router.push('/')

        }

    }

    function handleForm(ev: TypeInputChange){
    
        HandleFormByName(ev, userRef.current)

    }

    return <div>
        <h1>
            Signin on your account
        </h1>
        <div>
            <div
                className='flex justify-start gap-1 mx-auto my-4 w-full max-w-60'
            >
                <label>
                    Email
                </label>
                <InputText
                    name='email'
                    placeholder='user@gmail.com'
                    onChange={handleForm}
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
                    onChange={handleForm}
                />
            </div>
            <Button
                className='w-full max-w-60'
                disabled={response.statusCode == 'waiting'}
                onClick={handleSubmit}
            >
                Signin
            </Button>
            { (response.msg && response.isError) && <p className='text-red-700 mt-2'>{ response.msg }</p> }
        </div>
        <div>
            <p
                className='mt-4'
            >If you don't have a account, go to
                <Link
                    href={'/signup'}
                    className='ml-2 text-blue-600 underline'
                >
                    Signup
                </Link>
            </p>
        </div>
    </div>

}