import { useRef, type FormEvent, type ComponentPropsWithoutRef, useImperativeHandle, forwardRef } from "react"
export type FormHandle = {
    clear: () => void
}

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void
}

export const Form = forwardRef<FormHandle, FormProps>(function({ onSave, children, ...otherProps }, ref) {
    const form = useRef<HTMLFormElement>(null)

    useImperativeHandle(ref, () => {
        return {
            clear() {
                form.current?.reset()
            }
        }
    })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData)
        onSave(data)
    }

    return <form onSubmit={handleSubmit} {...otherProps} ref={form}>
        {children}
    </form>
})