import logo from "../assets/logo.png";
import FooterColumn from "../helper/FooterColumn";
import SocialMedia from "../helper/SocialMedia";
import linkedin from "../assets/socialMedia/linkedinLogo.png";
import facebook from "../assets/socialMedia/facebookLogo.png";
import instagram from "../assets/socialMedia/instagramLogo.png";
import twitter from "../assets/socialMedia/twitterLogo.png";

export default function Footer() {
  return (
    <footer className="bg-white mt-6 p-4 md:py-15">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex flex-col mb-4">
          <img src={logo} alt="" className="w-42.5 md:w-48.25 mb-4" />
          <p className="text-sm font-bold tracking-wide lg:text-lg">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
          </p>
          <p className="text-sm md:text-base ">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
          <p className="text-sm md:text-base">+62-877-7123-1234</p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <FooterColumn
            title="Kategori"
            links={[
              "Digital & Teknologi",
              "Pemasaran",
              "Manajemen Bisnis",
              "Pengembangan Diri",
              "Desain",
            ]}
          />
          <FooterColumn
            title="Perusahaan"
            links={[
              "Tentang Kami",
              "FAQ",
              "Kebijakan Privasi",
              "Ketentuan Layanan",
              "Bantuan",
            ]}
          />
          <FooterColumn title="Komunitas" links={["Tips Sukses", "Blog"]} />
        </div>
      </div>
      <span className=" container mx-auto block w-full h-px bg-[#3A35411F] my-4"></span>

      <div className="container mx-auto flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
        <div className="flex flex-row gap-2 ">
          <SocialMedia img={linkedin} />
          <SocialMedia img={facebook} />
          <SocialMedia img={instagram} />
          <SocialMedia img={twitter} />
        </div>
        <div>
          <p className="text-[#333333AD]">&copy;2026 Gerobak Sayur. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
