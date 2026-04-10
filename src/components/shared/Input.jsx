const Input = ({name, placeholder, type="text"}) => {
  return (
    <div>
      <input 
        className="border border-gray-200 text-gray-800 rounded px-3 py-2 w-full" 
        placeholder={placeholder} 
        name={name}
        type={type}
      />
    </div>
  )
}

export default Input
