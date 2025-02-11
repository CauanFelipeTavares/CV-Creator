'use client'

import Link from 'next/link'

export default function OptionsCreatePage(){

    return <div
        className='flex h-[80vh] justify-center gap-8 mt-8'
    >
        <Link
            href='/cv/list'
            className='bg-white flex flex-col justify-center content-center w-2/5 h-full p-6 rounded-lg border-primary shadow-md border-[1px]'
        >
            <h3 className='text-lg mb-4 font-semibold'>
                Show your CVs
            </h3>
            <img src='/img/illustration-cv.jpg' className='h-3/5 w-auto' alt='' />
        </Link>
        <Link
            href='/elements/list'
            className='bg-white flex flex-col justify-center content-center w-2/5 h-full p-6 rounded-lg border-primary shadow-md border-[1px]'
        >
            <h3 className='text-lg mb-4 font-semibold'>
                Show your elements
            </h3>
            <img src='/img/illustration-elements.jpg' className='h-3/5 w-auto' alt='' />
        </Link>
    </div>

}