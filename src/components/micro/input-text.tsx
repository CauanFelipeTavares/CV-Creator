import { ComponentProps } from 'react'
import { mergeStyles } from '@/lib/utils/style'

interface IInputTextProps extends ComponentProps<'input'> {
    name: string
}

export default function InputText({
    ...props
}: IInputTextProps ){

    return <input
        {...props}
        key={props.name}
        className={mergeStyles('bg-secundary w-full p-2 rounded-md text-left border-primary border-[1px]', props.className)}
    />

}