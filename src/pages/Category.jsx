import Card from "../component/Card";
import Filter from "../component/Filter";
import Navbar from "../component/Navbar";
import { courses } from "../data/courses";
const Category = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-base font-semibold md:text-2xl">
          Koleksi Video Pembelajaran Unggulan
        </h1>
        <p className="text-sm font-normal text-[#333333AD] md:text-base">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>

      <Filter />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Category;
