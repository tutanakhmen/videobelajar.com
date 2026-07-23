
export default function Button({ onClick, children, variant }) {
    const colors = {
        primary: "text-white bg-[#3ECF4C]",
        secondary: "text-[#3ECF4C] bg-[#E2FCD9CC]",
        default: "text-black bg-white"
    }
    console.log(colors[variant])
  return <button className={`mt-2 p-1 w-full ${colors[variant]} rounded-lg`}
  onClick={onClick}>{children}</button>;
}
