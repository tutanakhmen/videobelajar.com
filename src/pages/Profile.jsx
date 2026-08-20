import ProfileCard from "../component/ProfileCard";
import Sidebar from "../component/Sidebar";

const Profile = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row">
      <Sidebar />
      <div className="w-full m-3">
       <ProfileCard />
      </div>
    </div>
  );
};

export default Profile;
