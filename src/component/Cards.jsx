import Card from "./Card";
import imgCourse1 from "../assets/imageCourse/course1.jpg"
import imgCourse2 from "../assets/imageCourse/course2.jpg"
import imgCourse3 from "../assets/imageCourse/course3.jpg"
import imgCourse4 from "../assets/imageCourse/course4.jpg"
import imgCourse5 from "../assets/imageCourse/course5.jpg"
import imgCourse6 from "../assets/imageCourse/course6.jpg"
import imgCourse7 from "../assets/imageCourse/course7.jpg"
import imgCourse8 from "../assets/imageCourse/course8.jpg"
import imgCourse9 from "../assets/imageCourse/course9.jpg"
import imgMentor1 from "../assets/imageMentor/mentorimg1.png"
import imgMentor2 from "../assets/imageMentor/mentorimg2.png"
import imgMentor3 from "../assets/imageMentor/mentorimg3.png"
import imgMentor4 from "../assets/imageMentor/mentorimg4.png"
import imgMentor5 from "../assets/imageMentor/mentorimg5.png"
import imgMentor6 from "../assets/imageMentor/mentorimg6.png"
import imgMentor7 from "../assets/imageMentor/mentorimg7.png"
import imgMentor8 from "../assets/imageMentor/mentorimg8.png"
import imgMentor9 from "../assets/imageMentor/mentorimg9.png"

const Cards = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-[24px] font-semibold md:text-[32px]">Koleksi Video Pembelajaran Unggulan</h1>
      <p className="text-sm text-[#333333AD] font-normal md:text-base">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
      <br />
      <div className="container mx-auto grid place-items-center grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      <Card courseImg={imgCourse1} mentorImg={imgMentor1} />
      <Card courseImg={imgCourse2} mentorImg={imgMentor2} />
      <Card courseImg={imgCourse3} mentorImg={imgMentor3} />
      <Card courseImg={imgCourse4} mentorImg={imgMentor4} />
      <Card courseImg={imgCourse5} mentorImg={imgMentor5} />
      <Card courseImg={imgCourse6} mentorImg={imgMentor6} />
      <Card courseImg={imgCourse7} mentorImg={imgMentor7} />
      <Card courseImg={imgCourse8} mentorImg={imgMentor8} />
      <Card courseImg={imgCourse9} mentorImg={imgMentor9} />

      </div>
    </div>
  );
};

export default Cards;
