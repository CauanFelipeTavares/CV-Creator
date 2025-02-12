import { ComponentProps } from 'react'
import { mergeStyles } from '@/lib/utils/style'

interface IDatetimeProps extends ComponentProps<'input'> {
    name: string
}

export default function Datetime({
    ...props
}: IDatetimeProps ){

    return <input
        {...props}
        type='date'
        className={mergeStyles('bg-secundary w-full p-2 rounded-md text-left border-primary border-[1px]', props.className)}
    />

}