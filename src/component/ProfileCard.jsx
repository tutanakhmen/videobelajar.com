import { useState } from "react";
import { Link } from "react-router";
import Button from "./Button";
import profileImage from "../assets/profile.png";

function logout() {
  localStorage.removeItem("currentUser");
}
export default function ProfileCard() {
  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
  });
  const [data, setData] = useState({
    nama: currentUser.nama,
    email: currentUser.email,
    phone: currentUser.phone,
    password: currentUser.password,
  });

  async function updateProfile(e) {
    e.preventDefault();
    const api = `https://6a69825cb2789286ad709a92.mockapi.io/users/${currentUser.id}`;
    try {
      await fetch(api, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama: data.nama,
          email: data.email,
          phone: data.phone,
          password: data.password,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  function updateForm(e) {
    const key = e.target.name;
    const value = e.target.value;
    setData({ ...data, [key]: value });
  }

  return (
    <div className="bg-white m-3 p-3">
      <div className="flex flex-row gap-3 p-2">
        <img src={profileImage} alt="" className="w-15 rounded-lg md:w-20" />
        <div className="flex flex-col">
          <p className="text-base font-bold md:text-xl">{data.nama}</p>
          <p>{data.email}</p>
        </div>
      </div>

      <form action="" onSubmit={updateProfile}>
        <div className="flex flex-col gap-3 lg:flex-row">
          {/* Nama */}
          <fieldset className="flex-1 border border-[#F1F1F1] rounded-lg px-3 pb-1">
            <legend className="px-1 text-sm text-[#333333]">Full Name</legend>

            <input
              type="text"
              id="nama"
              name="nama"
              value={data.nama}
              onChange={updateForm}
              className="w-full outline-none border-none"
            />
          </fieldset>

          {/* Email */}
          <fieldset className="flex-1 border border-[#F1F1F1] rounded-lg px-3 pb-1">
            <legend className="px-1 text-sm text-[#777777]">E-Mail</legend>

            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={updateForm}
              className="w-full outline-none border-none"
            />
          </fieldset>

          {/* Phone */}
              <select
                name="country"
                className="p-1 px-2 mr-1 border border-[#F1F1F1] rounded-md"
              >
                <option value="id">+62</option>
                <option value="usa">+1</option>
                <option value="sg">+65</option>
              </select>
          <fieldset className="flex-1 border border-[#F1F1F1] rounded-lg px-3 pb-1">
            <legend className="px-1 text-sm text-[#777777]">Phone</legend>

            <div className="flex flex-row">

              <input
                type="number"
                id="phone"
                name="phone"
                value={data.phone}
                onChange={updateForm}
                className="w-full outline-none border-none"
              />
            </div>
          </fieldset>
        </div>

        {/* Password */}
        <fieldset className="mt-3 border border-[#F1F1F1] rounded-lg px-3 pb-1">
          <legend className="px-1 text-sm text-[#777777]">Password</legend>

          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={updateForm}
            className="w-full outline-none border-none"
          />
        </fieldset>

        <Button variant="primary">Simpan</Button>
      </form>
      <Link to="/login">
        <Button variant="logout" onClick={logout}>
          Logout
        </Button>
      </Link>
    </div>
  );
}
