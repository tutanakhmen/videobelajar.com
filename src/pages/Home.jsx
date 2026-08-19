import Cards from "../component/Cards";
import Hero from "../component/Hero";
import Newsletter from "../component/Newslettter";

const Home = () => {
  return (
    <div>
      <main className="m-1">
        <Hero />
        <Cards />
        <Newsletter />
      </main>
    </div>
  );
};

export default Home;
