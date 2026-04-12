import { RiCloseCircleFill } from "@remixicon/react"
import 'animate.css'
import type { FC } from "react"

interface DrawerPropsInterface {
    children?: string
    title?: string
    open?: boolean
    close?: ()=>void
    key?: string | number
}

const Drawer: FC<DrawerPropsInterface> = ({children="Your content goes here", title="Drawer title", open, close, key=0}) => {
    return (
        <>
            <div
                className={`shadow-2xl fixed top-0 w-1/2 h-full overflow-auto p-8 z-[10000] space-y-4 transition-all duration-300 ${open ? 'right-0' : '-right-1/2'}`} 
                key={key}
            >
            <h1 className="text-lg font-semibold">{title}</h1>
                <div className="border-b border-gray-100 -mx-8"></div>
                <div className="text-gray-500">{children}</div>
                    <button title="close-drawer" className="absolute top-6 right-6 text-rose-500 hover:text-rose-600" onClick={close}>
                        <RiCloseCircleFill/>
                    </button>
            </div>
    </>
    )
}

export default Drawer
