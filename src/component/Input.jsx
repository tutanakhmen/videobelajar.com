export default function Input({ type, id, name, value, onChange }) {
  return (
    <div className=" w-full">
      <input type={type} id={id} name={name} value={value} onChange={onChange} required
      className="w-full p-1 border border-[#F1F1F1] border-solid rounded-md" />
    </div>
  );
}
