import { Link } from "react-router";

export default function SocialMedia({ img }) {
  return (
    <div className="">
      <Link>
        <img src={img} alt="" className="w-8.75 h-8.75" />
      </Link>
    </div>
  );
}
