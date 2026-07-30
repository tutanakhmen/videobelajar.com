import imgRating from "../assets/rating.png";

export default function Card({ courseImg, mentorImg }) {
  return (
    <div className="flex flex-col bg-white rounded-lg p-2">
      <div className="flex flex-row gap-1.5 md:flex-col ">
        <img src={courseImg} alt="" className="object-cover object-center h-20.5 w-20.5 rounded-lg md:w-full md:h-48.25"/>
        <div className="">
          <h4 className="text-base font-semibold">
            Big 4 Auditor Financial Analyst
          </h4>
          <p className="hidden md:inline">
            Mulai transformasi dengan instruktur profesional, harga yang
            terjangkau, dan kurikulum terbaik
          </p>
          <div className="flex flex-row gap-1.5">
            <img src={mentorImg} alt="" className="w-9 h-9 rounded-lg" />
            <div>
              <h4 className="text-sm font-medium tracking-wider">
                Jenna Ortega
              </h4>
              <p className="text-xs font-normal text-[#333333AD]">
                Senior Accountant{" "}
                <span className="text-xs font-normal text-[#333333AD] hidden md:inline">
                  di Gojek
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <img src={imgRating} alt="" className="w-35.75 h-4.5" />
        <h3 className="text-xl font-semibold text-[#3ECF4C]">Rp 300K</h3>
      </div>
    </div>
  );
}
