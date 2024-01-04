import { ComponentPropsWithoutRef, forwardRef } from "react"

type InputProps = {
    id: string
    label: string
    type: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>( function({ id, label, ...props }, ref) {
    return <p>
        <label
            htmlFor={id}
        >
            {label}
        </label>
        <input id={id} {...props} ref={ref} name={id} />
    </p>
})
