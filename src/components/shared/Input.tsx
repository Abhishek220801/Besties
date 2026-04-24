import type { FC } from "react"

interface InputPropsInterface {
  name? : string
  placeholder? : string
  type? : string
  value? : string
}

const Input: FC<InputPropsInterface> = ({name, placeholder, type="text", value}) => {
  return (
    <div>
      <input 
        className="border border-gray-200 text-gray-800 rounded px-3 py-2 w-full" 
        placeholder={placeholder} 
        name={name}
        type={type}
        value={value}
      />
    </div>
  )
}

export default Input
