import type { FC, ReactNode } from 'react'

const ButtonModel = {
    primary: "bg-blue-500 hover:bg-blue-600 px-6 py-2 text-white rounded font-medium",
    secondary: "bg-indigo-500 hover:bg-indigo-600 px-6 py-2 text-white rounded font-medium",
    danger: "bg-red-500 hover:bg-red-600 px-6 py-2 text-white rounded font-medium",
    warning: "bg-yellow-500 hover:bg-yellow-600 px-6 py-2 text-white rounded font-medium",
    dark: "bg-zinc-500 hover:bg-zinc-600 px-6 py-2 text-white rounded font-medium",
    success: "bg-green-500 hover:bg-green-600 px-6 py-2 text-white rounded font-medium",
    info: "bg-cyan-500 hover:bg-cyan-600 px-6 py-2 text-white rounded font-medium"
}

interface ButtonInterface {
    children?: ReactNode
    type?: keyof typeof ButtonModel
    onClick?: () => void
}

const Button : FC<ButtonInterface> = ({children="Submit", type="primary", onClick}) => {
    return (
        <button className={`${ButtonModel[type]} flex`} onClick={onClick}>{children}</button>
    )
}
export default Button
