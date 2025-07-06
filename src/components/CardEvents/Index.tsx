import React from "react";
import { Link } from "react-router-dom";
import { urlPath } from "../../lib/url-path";

const CardsEvent: React.FC<any> = ({
  id,
  poster_url,
  name,
  city,
  event_date,
}) => {
  return (
    <div className="flex flex-col items-start justify-between w-full pb-4 max-w-[473px] lg:min-h-[844px] min-h-[600px] border border-slate-400 p-5 rounded-3xl">
      <img
        src={urlPath(poster_url)}
        alt=""
        className="object-cover overflow-hidden rounded-2xl"
      />
      <h1 className="lg:text-[28px] text-2xl text-center w-full font-extrabold uppercase">
        {name}
      </h1>
      <div className="grid items-start justify-start w-full grid-cols-2 gap-4">
        <div className="flex flex-col items-start justify-start">
          <h4 className="text-xl font-semibold">Waktu</h4>
          <div className="flex flex-col items-start justify-start gap-3">
            <div className="flex flex-col items-start justify-start">
              <p className="font-semibold text-md">
                {new Date(event_date).toDateString()}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h4 className="text-xl font-semibold">Lokasi</h4>
          <p className="text-base">{city}</p>
        </div>
      </div>
      <Link
        to={`/event/${id}`}
        className="w-full py-2 text-lg font-semibold text-center text-white rounded-full lg:text-2xl bg-primary lg:py-2"
      >
        Cek Ketersediaan Tiket
      </Link>
    </div>
  );
};

export default CardsEvent;
