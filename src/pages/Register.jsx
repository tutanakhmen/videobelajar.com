import Form from "../component/Form";
import Navbar from "../component/Navbar";

export default function Register() {
  return (
    <div className="">
      <Navbar />
      <main className="w-full max-w-3xl mx-auto">
        <Form auth="register" />
      </main>
      <h1>Register</h1>
    </div>
  );
}
