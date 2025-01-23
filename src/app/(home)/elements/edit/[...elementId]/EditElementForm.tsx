'use client'

import { useRouter } from 'next/navigation'
import { JSX, useActionState, useRef, useState } from 'react'
import Select from '@/components/micro/input-select'
import Button from '@/components/micro/button'
import { IActionResponse } from '@/lib/utils/response'

type SubmitActionType = (formData: FormData) => Promise<IActionResponse>

interface IEditElementProps {
    Form: React.ReactNode
    elementId: string
    submitAction: SubmitActionType
}

export default function EditElementForm({
    Form,
    elementId,
    submitAction,
}: IEditElementProps){

    const router = useRouter()

    const [state, clientSubmitAction, isPending] = useActionState(
        async (_previousData: any, formData: FormData) => {
            
            const response = await submitAction(formData)

            if (response?.status === 'success') router.push(`/elements/list`)
    
            return response

        },
        null,
    )

    return <form
        className='flex flex-col gap-8 justify-center mt-8'
        action={clientSubmitAction}
    >
        <input type='hidden' name='elementId' value={elementId} />
        { Form }
        {state?.status == 'error' && <p className='text-red-600 my-0'>*{state.msg}</p>}
        <Button
            className='w-1/4 mt-2 ml-auto mr-[10%]'
            disabled={isPending}
        >
            Update Element
        </Button>
    </form>

}
