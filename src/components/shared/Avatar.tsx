import type { FC, ReactNode } from "react";

interface AvatarInterface {
    title?: string
    subtitle?: ReactNode
    imgUrl?: string
    titleColor?: string
    subtitleColor?: string
    size?: "lg" | "md" | "sm"
    key?: string | number
}

const Avatar: FC<AvatarInterface> = ({title, subtitle="Subtitle missing", imgUrl, titleColor="#000000", subtitleColor="#f5f5f5", size="lg", key=0}) => {
  return (
      <div className="flex gap-3 items-center" key={key}>
        { imgUrl && 
            <img
            src={imgUrl}
            className={`${size === "md" ? "w-15 h-15" : "w-16 h-16"} rounded-full object-cover`}
            alt="user__avatar"
            />
        }
        { (title && subtitle) && 
            <div className="flex flex-col">
            {title && <h1 className={`${size === "lg" ? "text-lg/6" : "text-sm"} font-medium`} style={{color: titleColor}}>{title}</h1>}
            {subtitle && <label className="text-sm" style={{color: subtitleColor}}>{subtitle}</label>}
            </div>
        }
      </div>
  )
}

export default Avatar
