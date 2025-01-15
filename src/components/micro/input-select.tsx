import { ComponentProps } from 'react'

interface ISelectProps extends ComponentProps<'select'> {
    name: string
    options: {
        value: string
        title: string
    }[]
}

export default function Select({
    options,
    ...props
}: ISelectProps){

    return <select
        {...props}
        className={`bg-blue-800 w-full p-2 rounded-md text-left ${props.className}`}
    >
        {
            options.map(opt => <option
                key={opt.value}
                value={opt.value}
                className='text-left'
            >
                { opt.title }
            </option>)
        }
    </select>

}