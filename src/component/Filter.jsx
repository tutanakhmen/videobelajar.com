export default function Filter() {
  return (
    <div className="md:container md:mx-auto bg-white m-3 p-2 rounded-lg flex flex-col gap-2">
      <div className="flex justify-between">
        <p className="font-medium text-[#333333AD]">Filter</p>
        <p className="font-medium text-[#FF5C2B]">Reset</p>
      </div>

      <div className="p-1 border border-[#3A35411F] rounded-lg">
        
        <h1 className="font-medium text-base text-[#3ECF4C]">Bidang Studi</h1>
      </div>

      <div className="p-1 border border-[#3A35411F] rounded-lg">
        <h1 className="font-medium text-base text-[#3ECF4C]">Harga</h1>
      </div>

      <div className="p-1 border border-[#3A35411F] rounded-lg">
        <h1 className="font-medium text-base text-[#3ECF4C]">Durasi</h1>
      </div>
    </div>
  );
}
