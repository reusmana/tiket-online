import React from "react";
import { Link } from "react-router-dom";

type CardEventProps = {
  image: string;
  title?: string;
  date?: string;
  time?: string;
  location?: string;
  slug?: string;
};
const CardsEvent: React.FC<CardEventProps> = ({
  image,
  title,
  date,
  time,
  location,
  slug,
}) => {
  return (
    <div className="flex flex-col items-start justify-between w-full pb-4 max-w-[473px] min-h-[844px] border border-slate-400 p-5 rounded-3xl">
      <img
        src={image}
        alt=""
        className="object-cover overflow-hidden rounded-2xl"
      />
      <h1 className="text-[28px] text-center w-full font-extrabold">
        MENYEMBUHKAN LUKA HATI
      </h1>
      <div className="grid items-start justify-start w-full grid-cols-2">
        <div className="flex flex-col items-start justify-start">
          <h4 className="text-xl font-semibold">Waktu</h4>
          <p className="text-base">29 Juni 2025</p>
          <p className="text-base">09.00 - 12.00 WIB</p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h4 className="text-xl font-semibold">Lokasi</h4>
          <p className="text-base">Bandar Lampung</p>
        </div>
      </div>
      <Link
        to={`/event/${slug}`}
        className="w-full py-2 text-2xl font-semibold text-center text-white rounded-full bg-primary lg:py-2"
      >
        Cek Ketersediaan Tiket
      </Link>
    </div>
  );
};

export default CardsEvent;
