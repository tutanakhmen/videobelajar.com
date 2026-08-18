import { useNavigate } from "react-router";

const Page404 = () => {
  const navigate = useNavigate()

  function gotoHomepage() {
    navigate("/")
  }
  return (
    <div className="">
      <h1>Page 404</h1>
      <button onClick={gotoHomepage}>Back to Home</button>
    </div>
  );
};

export default Page404;
