import Cards from "../component/Cards";
import Hero from "../component/Hero";
import Navbar from "../component/navbar";

const Home = () => {
 
  return (
    <div>
      <Navbar pages="home" />
      <div>
      <Hero />
      <Cards />
        
      </div>
      <h1>Home</h1>
     
   
    </div>
  );
};

export default Home;
