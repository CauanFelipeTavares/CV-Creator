'use client'

import { Font, PDFViewer } from "@react-pdf/renderer"

export default function PDFComponent({ children }: any){

    Font.register({
        family: 'Poppins',
        fonts: [
            { src: '/fonts/Poppins-Regular.ttf', fontWeight: 'normal', },
            { src: '/fonts/Poppins-SemiBold.ttf', fontWeight: 'semibold' },
            { src: '/fonts/Poppins-Bold.ttf', fontWeight: 'bold' },
        ]
    })

    return <PDFViewer className='w-[80%] h-[90vh] min-w-[350px] mx-auto my-4'>
        { children }
    </PDFViewer>

}