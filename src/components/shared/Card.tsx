import { div } from "motion/react-client";
import type { FC, ReactElement } from "react";

interface CardInterface {
    children?: ReactElement
    title?: string
    footer?: ReactElement
    divider?: Boolean
}

const Card: FC<CardInterface> = ({children, title, footer, divider=false}) => {
  return (
    <div className="bg-white shadow-lg px-5 py-4 rounded-lg border border-gray-100 space-y-3">
        {title && <h1 className="text-lg font-semibold">{title}</h1>}
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
