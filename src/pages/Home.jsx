import Cards from "../component/Cards";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Newsletter from "../component/Newslettter";

const Home = () => {
  return (
    <div>
      <Navbar pages="home" />
      <main className="m-1">
        <Hero />
        <Cards />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
