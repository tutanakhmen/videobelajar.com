import { Outlet } from "react-router";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">

      <Outlet />
      </main>
      <Footer />
    </div>
  );
}
