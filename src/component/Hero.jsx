import Button from "./Button";
import bgHero from "../assets/hero.jpg";
const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center h-100 gap-4 p-5 rounded-lg bg-cover bg-center  text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7)), url(${bgHero})`,
      }}
    >
      <h2 className="font-bold text-2xl">
        Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
        Interaktif!
      </h2>
      <p className="text-sm">
        Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
        pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
        berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman
        Anda.
      </p>
      <Button variant="primary">
        <span className="text-sm text-center">
          Temukan Video Course untuk Dipelajari!
        </span>
      </Button>
    </div>
  );
};

export default Hero;
