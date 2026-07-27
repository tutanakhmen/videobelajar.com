import Card from "../component/Card";
import Hero from "../component/Hero";
import Navbar from "../component/navbar";

const Home = () => {
 
  return (
    <div>
      <Navbar pages="home" />
      <div className="m-2">
      <Hero />
      <Card />
        
      </div>
      <h1>Home</h1>
     
   
    </div>
  );
};

export default Home;
