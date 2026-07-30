
export default function Button({ onClick, children, variant }) {
    const type = {
        primary: "text-white bg-[#3ECF4C] p-1.5 w-full rounded-lg",
        secondary: "text-[#3ECF4C] bg-[#E2FCD9CC] p-1.5 w-full rounded-lg",
        default: "text-black bg-white border border-[#F1F1F1] p-1.5 w-full rounded-lg",
        registerHome: "bg-white text-[#3ECF4C] border-[0.5px] border-solid border-[#3ECF4C] font-semibold rounded-lg px-3 py-1",
        loginHome: "text-white bg-[#3ECF4C] font-semibold px-4 py-1.5 rounded-lg",
        category: "text-[#333333AD] px-4 py-1 font-medium",
        newsletter: "bg-[#FFBD3A] text-white rounded-lg py-2 md:absolute right-1 top-1 bottom-1 px-4 md:py-0"
    }
  return <button className={`cursor-pointer ${type[variant]}`}
  onClick={onClick}>{children}</button>;
}
