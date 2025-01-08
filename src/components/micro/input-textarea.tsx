import { ComponentProps } from 'react'

// interface IInputTextProps extends ComponentProps<'input'> {}

export default function Textarea({
    ...props
}: ComponentProps<'textarea'> ){

    return <textarea
        {...props}
        className={`bg-blue-800 w-full p-2 rounded-md text-left ${props.className}`}
    />

}