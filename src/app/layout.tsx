import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'CV Generator',
    description: 'Generate your custom CV',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>){
    return (
        <html lang='en'>
            <body>
                {children}
            </body>
        </html>
    )
}
