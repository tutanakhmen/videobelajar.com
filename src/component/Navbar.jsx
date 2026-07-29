import { Link, useNavigate } from "react-router";
import logoImage from "../assets/Logo.png";
import { useState } from "react";
import Button from "./Button";

export default function Navbar({ pages }) {
  const loginPages = pages === "login";
  const registerPages = pages === "register";
  const isAuth = loginPages || registerPages;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()

  function hamburger() {
    setIsMenuOpen(!isMenuOpen);
  }

   function btnLogin() {
    navigate("/login");
  }

  function btnRegister() {
    navigate("/register");
  }

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto p-3 flex justify-between items-center relative">
        <Link to="/">
          <img src={logoImage} alt="" className="w-34" />
        </Link>

        {!isAuth && (
          <div className="flex flex-row items-center justify-center">
          <button onClick={hamburger} className="md:hidden">
            <div className="flex flex-col gap-1">
              <span className="w-7 h-1 bg-[#4A505C] rounded-2xl"></span>
              <span className="w-7 h-1 bg-[#4A505C] rounded-2xl"></span>
              <span className="w-7 h-1 bg-[#4A505C] rounded-2xl"></span>
            </div>
          </button>

          <div className="hidden md:flex flex-row items-center gap-2">
            <Button variant="category">Kategori</Button>
            <Button onClick={btnLogin} variant="loginHome">Login</Button>
            <Button onClick={btnRegister} variant="registerHome" >Register</Button>
          </div>

          </div>
          

        )}
        {isMenuOpen && (
          <div className="flex flex-col absolute top-10 right-2 gap-0.5 px-3 py-2 bg-white rounded-lg">
            <Button onClick={btnLogin} variant="loginHome">
              Masuk
            </Button>
            <Button onClick={btnRegister} variant="registerHome">
              Register
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
