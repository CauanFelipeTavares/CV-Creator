import { ComponentProps } from 'react'

// interface IButtonProps extends ComponentProps<'button'> {}

export default function Button({
    ...props
}: ComponentProps<'button'>){

    return <button
        {...props}
        className={`px-10 py-1.5 border-2 rounded-md bg-blue-800 hover:bg-blue-900 ${props.className}`}
    />

}