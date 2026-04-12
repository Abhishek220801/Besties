import type { FC, FormEvent, ReactNode } from "react";

interface FormPropsInterface {
  children?: ReactNode
  onVal?: (data: Record<string,string>) => void
}

const Form : FC<FormPropsInterface> = ({children, onVal}) => {
    const getVal = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const inputs = form.getElementsByTagName("input");
        const formData: Record<string,string> = {};
        for(let input of inputs)
        {
            const key = input.name;
            const value = input.value;
            formData[key] = value
        }
        onVal?.(formData)
    }
  return (
    <form onSubmit={getVal}>
      {children}
    </form>
  )
}

export default Form
