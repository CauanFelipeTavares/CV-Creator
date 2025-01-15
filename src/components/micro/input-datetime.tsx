import { ComponentProps } from 'react'

interface IDatetimeProps extends ComponentProps<'input'> {
    name: string
}

export default function Datetime({
    ...props
}: IDatetimeProps ){

    return <input
        {...props}
        type='date'
        className={`bg-blue-800 w-full p-2 rounded-md text-left ${props.className}`}
    />

}