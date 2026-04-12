import type { FC, ReactNode } from 'react'

const IconButtonModel = {
  primary:
    "bg-blue-50 text-blue-500 hover:bg-blue-500 hover:text-white h-9 w-9 rounded font-medium",

  secondary:
    "bg-indigo-50 text-indigo-500 hover:bg-indigo-500 hover:text-white h-9 w-9 rounded font-medium",

  danger:
    "bg-red-50 text-red-500 hover:bg-red-500 hover:text-white h-9 w-9 rounded font-medium",

  warning:
    "bg-yellow-50 text-yellow-500 hover:bg-yellow-500 hover:text-white h-9 w-9 rounded font-medium",

  dark:
    "bg-zinc-50 text-zinc-500 hover:bg-zinc-500 hover:text-white h-9 w-9 rounded font-medium",

  success:
    "bg-green-50 text-green-500 hover:bg-green-500 hover:text-white h-9 w-9 rounded font-medium",

  info:
    "bg-cyan-50 text-cyan-500 hover:bg-cyan-500 hover:text-white h-9 w-9 rounded font-medium"
} as const

interface IconButtonInterface {
    type?: keyof typeof IconButtonModel
    onClick?: () => void
    key?: string | number
    icon?: ReactNode
    title?: string
    children?: ReactNode
}

const IconButton : FC<IconButtonInterface> = ({children=undefined, key=0, type="primary", onClick, icon, title}) => {
    return (
        <button key={key} title={title} className={`${IconButtonModel[type]} flex items-center justify-center text-base`} onClick={(e) => {
            e.preventDefault();
            onClick?.()
        }
        }>{children}</button>
    )
}
export default IconButton
