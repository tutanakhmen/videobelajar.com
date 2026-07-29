import Form from "../component/Form";
import Navbar from "../component/navbar";

const Login = () => {
  return (
    <div>
      <Navbar pages="login" />
      <div className="w-full max-w-3xl mx-auto ">
        <Form auth="login" />
      </div>
      <h1>Login</h1>
    </div>
  );
};

export default Login;
