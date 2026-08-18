import Card from "./Card";
import { courses } from "../data/courses";

const Cards = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-[24px] font-semibold md:text-[32px]">
        Koleksi Video Pembelajaran Unggulan
      </h1>
      <p className="text-sm text-[#333333AD] font-normal md:text-base">
        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
      </p>
      <br />
      <div className="container mx-auto grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
