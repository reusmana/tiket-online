import CardsEvent from "../CardEvents/Index";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Poster1 from "../../assets/posters/Poster 1 1.png";
import Poster2 from "../../assets/posters/Poster 2 1.png";
import Poster3 from "../../assets/posters/Poster 3 2.png";

const EventSection = () => {
  return (
    <section className="flex flex-col w-full max-w-[1480px] gap-10 px-2 py-10 mx-auto overflow-scroll lg:py-20 md:py-16">
      <div className="flex items-center justify-center gap-4 max-w-[1184px] mx-auto">
        <h1 className="text-6xl text-center ">
          Mau ikut yang mana? Pilih event <br /> yang paling kamu suka!
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-20 lg:grid-cols-3 card">
        {[Poster1, Poster2, Poster3].map((poster, index) => (
          <div key={index} className="w-full">
            <CardsEvent image={poster} slug="ustad maulana" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center py-3 mt-20">
        <Link
          to="/event"
          className="flex items-center gap-6 px-6 py-2 text-[48px] text-white rounded-full bg-primary"
        >
          Cek ketersediaan tiket!
          <FaArrowRightLong />
        </Link>
      </div>
    </section>
  );
};

export default EventSection;
