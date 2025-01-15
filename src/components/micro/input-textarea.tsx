import { ComponentProps } from 'react'

interface ITextareaProps extends ComponentProps<'textarea'> {
    name: string
}

export default function Textarea({
    ...props
}: ITextareaProps ){

    return <textarea
        {...props}
        className={`bg-blue-800 w-full p-2 rounded-md text-left ${props.className}`}
    />

}