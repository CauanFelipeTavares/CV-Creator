import { mergeStyles } from '@/lib/utils/style'
import { ComponentProps } from 'react'

// interface IButtonProps extends ComponentProps<'button'> {}

export default function Button({
    ...props
}: ComponentProps<'button'>){

    return <button
        {...props}
        className={mergeStyles('px-10 py-1.5 border-primary border-[1px] rounded-md bg-secundary hover:bg-thirth disabled:cursor-not-allowed disabled:opacity-50', props.className)}
    />

}