import { ComponentProps } from 'react'

// interface IInputTextProps extends ComponentProps<'input'> {}

export default function InputText({
    ...props
}: ComponentProps<'input'> ){

    return <input
        {...props}
        type='text'
        className={`bg-blue-800 w-full p-2 rounded-md text-left ${props.className}`}
    />

}