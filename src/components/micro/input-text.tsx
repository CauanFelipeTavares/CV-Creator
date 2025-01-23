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
        className={`bg-secundary w-full p-2 rounded-md text-left border-primary border-2 ${props.className}`}
    />

}