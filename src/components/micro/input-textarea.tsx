import { ComponentProps } from 'react'
import { mergeStyles } from '@/lib/utils/style'

interface ITextareaProps extends ComponentProps<'textarea'> {
    name: string
}

export default function Textarea({
    ...props
}: ITextareaProps ){

    return <textarea
        {...props}
        className={mergeStyles('bg-secundary w-full p-2 rounded-md text-left border-primary border-[1px]', props.className)}
    />

}