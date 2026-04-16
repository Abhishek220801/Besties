import type { FC, FormEvent, ReactNode } from "react";

export type DataType = Record<string, string>

interface FormPropsInterface<T> {
  children?: ReactNode
  className?: string
  onVal?: (data: T) => void    // generic type
}

const Form : FC<FormPropsInterface<DataType>> = ({children, className, onVal}) => {
  const getVal = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = Object.fromEntries(new FormData(form)) as DataType

    onVal?.(formData)
  }
  return (
    <form className={className} onSubmit={getVal}>
      {children}
    </form>
  )
}

export default Form
