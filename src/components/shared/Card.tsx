import type { FC, ReactElement, ReactNode } from "react";

interface CardInterface {
    children?: ReactNode
    title?: ReactNode
    footer?: ReactElement
    divider?: Boolean
    bgColor?: string
    key?: string | number
    noPadding?: boolean
}

const Card: FC<CardInterface> = ({children, title, footer, divider=false, key=0, noPadding=false}) => {
  return (
    <div className={`bg-white shadow-lg ${noPadding ? "" : "px-5 py-4"} rounded-lg border border-gray-100 space-y-3`} key={key}>
        {title && <h1 className="text-lg font-semibold capitalize">{title}</h1>}
        {
        divider && 
            <div className="border-b border-gray-100 -mx-5 my-4 " />
        }
        {children && 
            <div className="text-gray-500">{children}</div>
        }
        {
            footer &&
            <div className="mt-4">
                <h1>{footer}</h1>
            </div>
        }
        </div>
  )
}

export default Card
