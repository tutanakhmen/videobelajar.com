import { Outlet, useLocation } from "react-router";
import Navbar from "../component/Navbar";

export default function AuthLayout() {
    const location = useLocation()
    const isLogin = location.pathname == "login"
    return (
        <div>
            <Navbar pages={isLogin? "login" : "register"} />
            <Outlet />
        </div>
    )
}