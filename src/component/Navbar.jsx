import { useNavigate } from "react-router";
import logoImage from "../assets/Logo.png";

const Navbar = () => {
  let navigate = useNavigate();

  function logoHomePage() {
    navigate("/");
  }

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto p-3 flex justify-between ">
        <button onClick={logoHomePage}>
          <img src={logoImage} alt="" className="w-34" />
        </button>

        <div className=""></div>
      </div>
    </nav>
  );
};

export default Navbar;
