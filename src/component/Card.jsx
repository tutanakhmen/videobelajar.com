
export default function Card({
  courseImg,
  mentorImg,
  courseTitle,
  courseDesc,
  courseMentor,
  mentorRole,
  mentorCompany,
  rate,
  price,
}) {
  return (
    <div className="flex flex-col bg-white rounded-lg p-2">
      <div className="flex flex-row gap-1.5 md:flex-col ">
        <img
          src={courseImg}
          alt=""
          className="object-cover object-center h-20.5 w-20.5 rounded-lg md:w-full md:h-48.25"
        />
        <div className="">
          <h4 className="text-base font-semibold">
            {courseTitle}
          </h4>
          <p className="hidden md:inline">
            {courseDesc}
          </p>
          <div className="flex flex-row gap-1.5">
            <img src={mentorImg} alt="" className="w-9 h-9 rounded-lg" />
            <div>
              <h4 className="text-sm font-medium tracking-wider">
                {courseMentor}
              </h4>
              <p className="text-xs font-normal text-[#333333AD]">
                {mentorRole}{" "}
                <span className="text-xs font-normal text-[#333333AD] hidden md:inline">
                  di {mentorCompany}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <img src={rate} alt="" className="w-35.75 h-4.5" />
        <h3 className="text-xl font-semibold text-[#3ECF4C]">{price}</h3>
      </div>
    </div>
  );
}
