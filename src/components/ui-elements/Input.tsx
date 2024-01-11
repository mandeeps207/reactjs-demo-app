interface Props {
    inputType: string,
    placeholder: string,
    value: string,
    onchange: any,
    name: string
}

const Input = ({inputType, placeholder, value, onchange, name}: Props) => {
  return (
    <input type={inputType} placeholder={placeholder} className="inline-block font-medium text-gray-400 border-0 py-3 rounded-2xl my-3 mx-auto ps-12 pe-6 w-full bg-[#e6ebf1]" value={value} onChange={onchange} name={name} />
  )
}

export default Input
