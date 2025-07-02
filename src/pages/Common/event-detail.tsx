import React from "react";
import CeramahPoster from "../../assets/img.png";
import { Link } from "react-router-dom";

const EventDetail = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="relative flex w-full mt-20 overflow-hidden lg:h-[32rem] h-screen bg-slate-400">
        <img
          src={CeramahPoster}
          alt=""
          className="object-cover object-center w-full"
        />
        <div className="absolute inset-0 flex items-center w-full px-2 bg-black bg-opacity-70">
          <div className="flex flex-col-reverse items-center justify-between w-full max-w-screen-lg mx-auto lg:gap-5 lg:flex-row">
            <div className="flex flex-col items-center justify-start lg:mt-10 w-fit">
              <h1 className="text-3xl font-bold lg:text-5xl md:text-4xl text-slate-100">
                MH Pekanbaru | Sesi Jam 9
              </h1>
              <div className="flex flex-col items-start justify-start w-full gap-2 mt-4 text-lg text-slate-100">
                <ul className="flex items-start justify-start w-full gap-2">
                  <li className="font-bold">Tanggal</li>
                  <li>:</li>
                  <li>10 August 2025</li>
                </ul>
                <ul className="flex items-start justify-start w-full gap-2">
                  <li className="font-bold">Sesi</li>
                  <li>:</li>
                  <li>09:00</li>
                </ul>
                <ul className="flex items-start justify-start w-full gap-2">
                  <li className="font-bold">Lokasi</li>
                  <li>:</li>
                  <li>Pekanbaru</li>
                </ul>
                <ul className="flex items-start justify-start w-full gap-2">
                  <li className="font-bold">Harga Tiket Regular</li>
                  <li>:</li>
                  <li>Rp 130.000</li>
                </ul>
                <ul className="flex items-start justify-start w-full gap-2">
                  <li className="font-bold">Harga Tiket VIP</li>
                  <li>:</li>
                  <li>Rp 130.000</li>
                </ul>
              </div>
            </div>
            <div className="py-5 lg:h-[32rem] h-[20rem]">
              <img src={CeramahPoster} alt="" className="h-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      <section className="grid w-full max-w-screen-md gap-10 px-2 py-32 mx-auto lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h4>
            Kalau badan aja butuh istirahat, masa hati enggak? 😊 Yuk! Cerita,
            Curhat dan Muhasabah di event @menatahati.tc bareng @ahilmanfauzi!
          </h4>
          <p className="text-lg uppercase">
            MENATA HATI PALEMBANG SESI PAGI “BELAJAR MENERIMA TAKDIR”
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 h-fit">
          <button className="py-3 text-white rounded-md bg-slate-900">
            Regulder
          </button>
          <button className="py-3 text-orange-300 bg-transparent border border-orange-300 rounded-md">
            VIP
          </button>
          <Link
            to="/payment"
            className="col-span-2 py-3 text-center text-white bg-blue-400 rounded-md"
          >
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;
