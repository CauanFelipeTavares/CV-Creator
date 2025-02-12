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
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" />
            </head>
            <body
                // className={poppins.className}
            >
                {children}
            </body>
        </html>
    )
}
