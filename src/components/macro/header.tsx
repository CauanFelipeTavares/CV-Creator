'use client'

import { mobileWidthSize } from '@/lib/layout/utils'
import Link from 'next/link'
import { ComponentProps, useEffect, useState } from 'react'

export default function Header({
    ...props
}: ComponentProps<'header'>){

    const [isMobile, setIsMobile] = useState(window.innerWidth < mobileWidthSize)

    useEffect(() => {

        const handleResize = () => setIsMobile(window.innerWidth < mobileWidthSize)

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

    }, [])

    return <header
        {...props}
        className={`flex justify-around fixed z-30 w-full bg-blue-950 py-2 bottom-0 left-0 top-auto border-t-white border-t-2 md:bottom-auto md:top-0 md:border-b-white md:border-b-2 md:border-t-transparent ${props.className}`}
    >
        <Link
            href={'/cv/create'}
            className='flex gap-2 items-center cursor-pointer'
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-40-64a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,152Z"></path></svg>
            { !isMobile && 'Create' }
        </Link>
        <Link
            href={'/cv/list'}
            className='flex gap-2 items-center cursor-pointer'
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M208,136H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136Zm0,56H48V152H208v40Zm0-144H48A16,16,0,0,0,32,64v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Zm0,56H48V64H208v40Z"></path></svg>
            { !isMobile && 'CVs' }
        </Link>
        <Link
            href={'/profile'}
            className='flex gap-2 items-center cursor-pointer'
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path></svg>
            { !isMobile && 'Profile' }
        </Link>
    </header>

}