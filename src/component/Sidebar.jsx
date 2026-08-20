import { Link } from "react-router";

export default function Sidebar () {
    return(
        <div className="m-3">
            <h1>Ubah Profil</h1>
            <h2>Ubah data diri anda</h2>
            <div className="flex flex-col bg-white rounded-lg p-5 gap-3">
                

                <Link>
                Kelas Saya
                </Link>

                <Link>
                Pesanan Saya
                </Link>
            </div>
        </div>
    )
}