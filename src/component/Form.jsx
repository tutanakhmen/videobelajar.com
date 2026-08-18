import { useNavigate } from "react-router";
import logoGoogle from "../assets/logoGoogle.png";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

export default function Form({ auth }) {
  const [data, setData] = useState({
    email: "",
    password: "",
    nama: "",
    phone: "",
    confirm: "",
  });

  function formData(e) {
    const key = e.target.name;
    const value = e.target.value;
    setData({ ...data, [key]: value });
  }
  const navigate = useNavigate();
  const islogin = auth === "login";

  function btnLogin() {
    !islogin && navigate("/login");
  }

  function btnRegister() {
    islogin && navigate("/register");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const api = "https://6a69825cb2789286ad709a92.mockapi.io/users";

    try {
      if (islogin) {
        const res = await fetch(api);
        const users = await res.json();

        const loginUser = users.find(
          (u) => u.email == data.email && u.password == data.password,
        );

        // simpan data ke local storage
        localStorage.setItem("currentUser", JSON.stringify(loginUser))

        if (loginUser) {
          navigate("/");
        } else {
          alert("email atau password kamu salah");
        }

      } else {
        await fetch(api, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nama: data.nama,
            email: data.email,
            phone: data.phone,
            password: data.password,
          }),
        });
        alert("registrasi akun berhasil");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
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
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col w-full gap-1"
      >
        {!islogin && (
          <div className="flex flex-col">
            <label htmlFor="nama">Nama Lengkap</label>
            <Input
              type="text"
              id="nama"
              name="nama"
              onChange={formData}
              value={data.nama}
            />
          </div>
        )}

        <label htmlFor="email">E-mail</label>
        <Input
          type="email"
          id="email"
          name="email"
          onChange={formData}
          value={data.email}
        />

        {!islogin && (
          <div className="flex flex-col">
            <label htmlFor="phone">No HP</label>
            <div className="flex flex-row">
              <select
                name="country"
                id=""
                className="p-1 px-3 mr-1 border border-[#F1F1F1] border-solid rounded-md"
              >
                <option value="id">+62</option>
                <option value="usa">+1</option>
                <option value="sg">+65</option>
              </select>
              <Input
                type="number"
                id="phone"
                name="phone"
                onChange={formData}
                value={data.phone}
              />
            </div>
          </div>
        )}
        <label htmlFor="password">Kata Sandi</label>
        <Input
          type="password"
          id="password"
          name="password"
          onChange={formData}
          value={data.password}
        />
        {!islogin && (
          <div className="flex flex-col">
            <label htmlFor="confirm">Konfirmasi Kata Sandi</label>
            <Input
              type="password"
              id="confirm"
              name="confirm"
              onChange={formData}
              value={data.confirm}
            />
          </div>
        )}
        <a href="*" className="self-end text-sm text-[#333333AD] ">
          Lupa Password?
        </a>
        <div className="flex flex-col gap-3">
          <Button
            type={islogin ? "submit" : "button"}
            onClick={btnLogin}
            variant="primary"
          >
            Masuk
          </Button>
          <Button
            type={islogin ? "button" : "submit"}
            onClick={btnRegister}
            variant="secondary"
          >
            Register
          </Button>
          <span className="before:content-[''] before:h-px before:flex-1 before:bg-gray-400 after:content-[''] after:h-px after:flex-1 after:bg-gray-400 flex items-center gap-3 w-full">
            <span className="">atau</span>
          </span>
          <Button variant="default">
            <div className="flex items-center justify-center gap-1.5">
              <img src={logoGoogle} alt="" className="w-5 h-5" />
              masuk dengan Google
            </div>
          </Button>
        </div>
      </form>
    </div>
  );
}
