'use client'

import { PDFViewer } from "@react-pdf/renderer"

export default function PDFComponent({ children }: any){

    return <PDFViewer className='w-4/6 h-[90vh] min-w-[350px] mx-auto my-4'>
        { children }
    </PDFViewer>

}