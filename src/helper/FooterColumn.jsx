import { useState } from "react";
import dropdownMenu from "../assets/dropdownMenu.png";

export default function FooterColumn({ title, links }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function menuOpen () {
    setIsMenuOpen(!isMenuOpen)
    return(
        console.log(isMenuOpen)
    )
  }
  return (
    <div className="md:m-4">
      <div className="relative">
        <h3 className="text-base font-bold">
          {title}
          <button className="absolute right-1 md:hidden" onClick={menuOpen}>
            <img src={dropdownMenu} alt="" />
          </button>
        </h3>
      </div>
      <ul className="hidden text-[#333333AD] md:flex flex-col gap-2">
        {links.map((link) => {
          return <li className="hover:text-black cursor-pointer" key={link}>{link}</li>;
        })}
      </ul>
    </div>
  );
}
