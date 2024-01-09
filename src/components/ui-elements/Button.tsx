interface Props {
    title: string,
    event: any,
    type: any,
}

const Button = ({title, event, type}: Props) => {
  return (
    <button type={type} onClick={event} className=" inline-block text-white bg-[#50b5d1] font-medium rounded-3xl py-3 focus:outline-none my-3 w-full">
      {title}
    </button>
  )
}

export default Button;
