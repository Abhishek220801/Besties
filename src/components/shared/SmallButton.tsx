import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import type { FC, ReactNode } from 'react'

const ButtonModel = {
    primary: "bg-blue-500 hover:bg-blue-600 px-3 py-1 text-sm text-white rounded font-medium",
    secondary: "bg-indigo-500 hover:bg-indigo-600 px-3 py-1 text-sm text-white rounded font-medium",
    danger: "bg-red-500 hover:bg-red-600 px-3 py-1 text-sm text-white rounded font-medium",
    warning: "bg-yellow-500 hover:bg-yellow-600 px-3 py-1 text-sm text-white rounded font-medium",
    dark: "bg-zinc-500 hover:bg-zinc-600 px-3 py-1 text-sm text-white rounded font-medium",
    success: "bg-green-500 hover:bg-green-600 px-3 py-1 text-sm text-white rounded font-medium",
    info: "bg-cyan-500 hover:bg-cyan-600 px-3 py-1 text-sm text-white rounded font-medium"
}

interface ButtonInterface {
    children?: ReactNode
    type?: keyof typeof ButtonModel
    htmlType?: "button" | "submit" | "reset"
    onClick?: () => void
    key?: string | number
    loading?: Boolean
}

const Button : FC<ButtonInterface> = ({children="Submit", type="primary", onClick, htmlType, loading=false}) => {
    if(loading) return (
        <button type='button' disabled className='flex items-center gap-0.5 text-gray-400'>
            <FontAwesomeIcon icon={faSpinner} spin /> 
            Loading...
        </button>
    )
    return (
        <button type={htmlType} className={`${ButtonModel[type]} flex`} onClick={onClick}
        >
            {children}
        </button>
    )
}
export default Button
