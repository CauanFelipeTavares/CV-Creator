'use client'

import Link from 'next/link'

export default function OptionsCreatePage(){

    return <div
        className='flex h-[80vh] justify-center gap-8 mt-8'
    >
        <Link
            href='/cv/list'
            className='flex justify-center content-center w-2/5 h-full p-6 rounded-lg border-primary border-2'
        >
            Show your CVs
        </Link>
        <Link
            href='/elements/list'
            className='flex justify-center content-center w-2/5 h-full p-6 rounded-lg border-primary border-2'
        >
            Show your elements
        </Link>
    </div>

}