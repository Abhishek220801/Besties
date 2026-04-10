const Form = ({children, onVal}) => {
    const getVal = (e) => {
        e.preventDefault();
        const form = e.target;
        const inputs = form.getElementsByTagName("input");
        const formData = {};
        for(let input of inputs)
        {
            const key = input.name;
            const value = input.value;
            formData[key] = value
        }
        onVal(formData)
    }
  return (
    <form onSubmit={getVal}>
      {children}
    </form>
  )
}

export default Form
