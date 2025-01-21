import type { Metadata } from 'next'
import './globals.css'
// import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
    title: 'CV Generator',
    description: 'Generate your custom CV',
}

// const poppins = Poppins({
//     weight: '400',
//     subsets: ['latin'],
//     variable: '--font-poppins'
// })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>){
    return (
        <html lang='en'>
            <body
                // className={poppins.className}
            >
                {children}
            </body>
        </html>
    )
}
