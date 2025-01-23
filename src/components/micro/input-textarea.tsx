import { ComponentProps } from 'react'

interface ITextareaProps extends ComponentProps<'textarea'> {
    name: string
}

export default function Textarea({
    ...props
}: ITextareaProps ){

    return <textarea
        {...props}
        className={`bg-secundary w-full p-2 rounded-md text-left border-primary border-2 ${props.className}`}
    />

}