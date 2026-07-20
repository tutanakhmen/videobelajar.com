import logoImage from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto p-3 flex justify-between ">
       
          <img src={logoImage} alt="" className="w-34" />
       

        <div className="">
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
