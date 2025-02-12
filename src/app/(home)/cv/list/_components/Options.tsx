'use client'

import Popup from '@/components/macro/popup'
import Button from '@/components/micro/button'
import { IActionResponse } from '@/lib/utils/response'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface IOptionsList {
    id: string
    removeFunction: (id: string) => Promise<IActionResponse>
}

export function OptionsListComponent({
    id,
    removeFunction
}: IOptionsList){

    const router = useRouter()

    const [error, setError] = useState('')
    const [visibleDeletePopup, setVisibleDeletePopup] = useState(false)

    async function clientRemoveFunction(){

        const response = await removeFunction(id)

        if(response.status == 'success') location.reload()
        else setError('Error on remove')

    }

    return <div className='flex gap-4'>
        { visibleDeletePopup && <Popup
            hideFunction={() => setVisibleDeletePopup(false)}
        >
            <p>Have you sure to delete the CV?</p>
            <div className='flex gap-4 justify-center mt-4'>
                <Button
                    onClick={() => setVisibleDeletePopup(false)}
                    className='bg-blue-600 text-white hover:bg-blue-700'
                >
                    No, cancel
                </Button>
                <Button
                    onClick={clientRemoveFunction}
                    className='bg-red-600 text-white hover:bg-red-700'
                >
                    Yes, delete
                </Button>
            </div>
        </Popup> }
        { error && <p className='text-red-600'>{ error }</p> }
        <svg 
            className='cursor-pointer'
            onClick={() => router.push(`/cv/pdf/${id}`)}
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 256 256"><path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z" />
        </svg>
        <svg 
            className='cursor-pointer'
            onClick={() => router.push(`/cv/edit/${id}`)}
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 256 256"><path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"/>
        </svg>
        <svg
            onClick={() => setVisibleDeletePopup(true)}
            className='cursor-pointer'
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"/>
        </svg>
    </div>

}