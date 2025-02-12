'use client'

import Button from '@/components/micro/button'
import { useRouter } from 'next/navigation'

interface IButtonProps {
    id: string
}

export default function ButtonEdit({
    id
}: IButtonProps){
    
    const route = useRouter()

    return <div className='w-[80%] ml-[10%]'>
        <Button
            className='ml-auto block'
            onClick={() => route.push(`/cv/edit/${id}`)}
        >
            Update CV
        </Button>
    </div>

}