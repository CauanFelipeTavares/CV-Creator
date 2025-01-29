'use client'

import { useRouter } from 'next/navigation'

interface IOptionsList {
    id: string
}

export function OptionsListComponent({
    id
}: IOptionsList){

    const router = useRouter()

    return <>
        <p 
            onClick={() => router.push(`/cv/pdf/${id}`)}
            className='cursor-pointer'
        >
            Show PDF
        </p>
        <p>
            Update
        </p>
        <p>
            Delete
        </p>
    </>

}