import React from "react";
import CeramahPoster from "../../assets/img.png";
import { Link } from "react-router-dom";

const CardsEvent: React.FC = () => {
  const slug = "ceramah-ustadz-hilman-fauzi";
  return (
    <div className="flex flex-col items-start justify-start w-full pb-4">
      <img
        src={CeramahPoster}
        alt=""
        className="object-cover overflow-hidden rounded-md"
      />
      <div className="mt-4 text-lg font-semibold text-slate-700 h-fit">
        <span>Ceramah</span>
        <span> | </span>
        <span>Ustadz Hilman Fauzi</span>
      </div>
      <div className="flex justify-between w-full">
        <p>Yogyakarta</p>
        <p>06 Jul 2025</p>
      </div>
      <div className="flex justify-end w-full">
        <p>13:00</p>
      </div>
      <Link
        to={`/event/${slug}`}
        className="w-full py-2 text-lg text-center text-white bg-blue-400 rounded-md lg:py-4"
      >
        Booking now
      </Link>
    </div>
  );
};

export default CardsEvent;
