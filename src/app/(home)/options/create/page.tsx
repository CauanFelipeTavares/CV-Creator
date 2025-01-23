'use client'

import Link from 'next/link'

export default function OptionsCreatePage(){

    return <div
        className='flex h-[80vh] justify-center gap-8 mt-8'
    >
        <Link
            href='/cv/create'
            className='flex justify-center content-center w-2/5 h-full p-6 rounded-lg border-primary border-2'
        >
            Create a CV
        </Link>
        <Link
            href='/elements/create'
            className='flex justify-center content-center w-2/5 h-full p-6 rounded-lg border-primary border-2'
        >
            Create a element
        </Link>
    </div>

}