import { useNavigate } from "react-router";
import Navbar from "../component/Navbar";

const Home = () => {
  let navigate = useNavigate()

  function btnLogin () {
    navigate("/login")
  }

  function  btnRegister () {
    navigate("/register")
  }
  return (
    <div className="flex-row items-center">
        <Navbar />
      <h1>Home</h1>
      <button className="my-2 px-2 bg-[#3ECF4C] rounded" onClick={btnLogin}>Login</button>
      <br />
      <button className="px-2 bg-[#3ECF4C] rounded" onClick={btnRegister}>Register</button>
    </div>
  );
};

export default Home;
