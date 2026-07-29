import imgRating from "../assets/rating.png"

export default function Card() {
  return (
    <div className="">
      <img src="" alt="" />
      <h4>Big 4 Auditor Financial Analyst</h4>
      <p>
        Mulai transformasi dengan instruktur profesional, harga yang terjangkau,
        dan kurikulum terbaik
      </p>
      <div>
        <div>
            <h4>Jenna Ortega</h4>
            <p>Senior Accountant di Gojek</p>
        </div>
      </div>

      <div>
        <img src={imgRating} alt="" />
        <h3>Rp 300K</h3>
      </div>
    </div>
  );
}
