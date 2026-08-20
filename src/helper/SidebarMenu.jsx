import { Link } from "react-router";

export default function SidebarMenu({ children }) {
  return <Link className="border p-3 rounded-lg ">{children}</Link>;
}
