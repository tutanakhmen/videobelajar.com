import { useNavigate } from "react-router";
import logoGoogle from "../assets/logoGoogle.png";
import Input from "./Input";
import Button from "./Button";

export default function Form({ auth }) {
  const navigate = useNavigate();
  const islogin = auth === "login";

  function btnLogin() {
    !islogin && navigate("/login");
  }

  function btnRegister() {
    islogin && navigate("/register");
  }

  return (
    <div className="flex flex-col justify-center items-center p-4 mx-4 my-6 bg-white gap-1">
      <h2 className="text-2xl font-semibold">
        {islogin ? "Masuk ke Akun" : "Pendaftaran Akun"}
      </h2>
      <p className="text-sm font-normal text-[#333333AD]">
        {islogin
          ? " Yuk, lanjutin belajarmu di videobelajar."
          : "Yuk, daftarkan akunmu sekarang juga!"}
      </p>
      <form action="" className="flex flex-col w-full gap-1">
        {!islogin && (
          <div className="flex flex-col">
            <label htmlFor="nama">Nama Lengkap</label>
            <Input type="text" id="nama" name="nama" />
          </div>
        )}

        <label htmlFor="email">E-mail</label>
        <Input type="email" id="email" name="email" />

        {!islogin && (
          <div className="flex flex-col">
            <label htmlFor="phone">No HP</label>
            <div className="flex flex-row">
              <select name="country" id="" className="p-1 px-3 mr-1 border border-[#F1F1F1] border-solid rounded-md">
                <option value="id">+62</option>
                <option value="usa">+1</option>
                <option value="sg">+65</option>
              </select>
              <Input type="number" id="phone" name="phone" />
            </div>
          </div>
        )}
        <label htmlFor="password">Kata Sandi</label>
        <Input type="password" id="password" name="password" />
        {!islogin && (
          <div className="flex flex-col">
            <label htmlFor="confirm">Konfirmasi Kata Sandi</label>
            <Input type="password" id="confirm" name="confirm" />
          </div>
        )}
      </form>
      <a href="*" className="self-end text-sm text-[#333333AD] ">
        Lupa Password?
      </a>
      <Button onClick={btnLogin} variant="primary">Masuk</Button>
      <Button onClick={btnRegister} variant="secondary">Register</Button>

      <span>atau</span>
      <Button variant="default">
        <div className="flex items-center justify-center gap-1.5">
        <img src={logoGoogle} alt="" className="w-5 h-5 "/>
        masuk dengan Google
          
        </div>
      </Button>
    </div>
  );
}
