import { Link, useNavigate } from "react-router";
import logoImage from "../assets/Logo.png";
import { useState } from "react";
import Button from "./Button";
import profileImage from "../assets/profile.png";

export default function Navbar({ pages }) {
  const loginPages = pages === "login";
  const registerPages = pages === "register";
  const isAuth = loginPages || registerPages;
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
  });

  function hamburger() {
    setIsMenuOpen(!isMenuOpen);
  }

  function btnLogin() {
    navigate("/login");
  }

  function btnRegister() {
    navigate("/register");
  }

  function btnCategory() {
    navigate("/category");
  }

  function btnLogout() {
    localStorage.removeItem("currentUser");
  }

  return (
    <nav className="sticky top-0 bg-white shadow-sm">
      <div className="container mx-auto p-3 flex justify-between items-center relative">
        <Link to="/">
          <img src={logoImage} alt="" className="w-34" />
        </Link>

        {!isAuth && (
          <div className="flex flex-row items-center justify-center">
            <button onClick={hamburger} className="md:hidden" type="button">
              <div className="flex flex-col gap-1">
                <span className="w-7 h-1 bg-[#4A505C] rounded-2xl"></span>
                <span className="w-7 h-1 bg-[#4A505C] rounded-2xl"></span>
                <span className="w-7 h-1 bg-[#4A505C] rounded-2xl"></span>
              </div>
            </button>

            <div className="hidden md:flex flex-row items-center gap-1">
              <Button onClick={btnCategory} variant="category">
                Kategori
              </Button>

              {currentUser ? (
                <Link to="/profile" className="flex flex-col items-center">
                  <img
                    src={profileImage}
                    alt=""
                    className="object-cover w-11 rounded-lg "
                  />
                </Link>
              ) : (
                <>
                  <Button onClick={btnLogin} variant="loginHome">
                    Login
                  </Button>
                  <Button onClick={btnRegister} variant="registerHome">
                    Register
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
        {isMenuOpen && (
          <div className="flex flex-col absolute top-10 right-2 px-3 py-2 bg-white rounded-lg text-center min-w-35 divide-y">
            <Button onClick={btnCategory} variant="category">
              Kategori
            </Button>

            {currentUser ? (
              <>
                <Link to="profile">
                  <Button variant="category">My Profile</Button>
                </Link>
                <Link to="login">
                  <Button onClick={btnLogout} variant="category">
                    Logout
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Button onClick={btnLogin} variant="category">
                  Login
                </Button>
                <Button onClick={btnRegister} variant="category">
                  Register
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
