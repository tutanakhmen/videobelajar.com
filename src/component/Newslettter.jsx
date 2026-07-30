import Button from "./Button";
import newsletter from "../assets/newsletter.jpg";

export default function Newsletter() {
  return (
    <div
      className="container mx-auto flex flex-col items-center justify-center text-center bg-cover bg-center text-white w-full h-100 rounded-lg mt-6"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6)), url(${newsletter})`,
      }}
    >
      <div className="flex flex-col max-w-131.25 p-5">
        <h1 className="text-base font-medium text-[#C1C2C4]">NEWSLETTER</h1>
        <h1 className="text-[24px] font-semibold md:text-[32px] ">
          Mau Belajar Lebih Banyak?
        </h1>
        <p className="text-sm font-normal tracking-wide">
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik hariesok.com
        </p>
        <br />
        <form action="">
          <div className="flex flex-col gap-3 relative">
            <input
              type="email"
              placeholder="Masukkan Emailmu"
              className="bg-white w-full p-3 rounded-lg border-none outline-none text-black placeholder:text-[#333333AD] placeholder:text-sm"
              required
            />
            <Button variant="newsletter">Subscribe</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
