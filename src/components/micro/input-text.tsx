import { ComponentProps } from 'react'

interface IInputTextProps extends ComponentProps<'input'> {
    name: string
}

export default function InputText({
    ...props
}: IInputTextProps ){

    return <input
        {...props}
        key={props.name}
        className={`bg-blue-800 w-full p-2 rounded-md text-left ${props.className}`}
    />

}