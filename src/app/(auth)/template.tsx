import { Metadata } from "next"

interface IAuth {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: 'CV Gen - Your Account',
    description: 'Create your account to start to generate your CVs',
}

export default function AuthTemplate({
    children
}: IAuth){

    return <div>
        <div>
            <h1>
                Your personal CV generator
            </h1>
        </div>
        <div>
            { children }
        </div>
    </div>

}