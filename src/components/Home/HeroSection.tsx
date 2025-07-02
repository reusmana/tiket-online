import React from "react";
import Ceramah from "../../assets/poster-ceramah.jpg";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-full min-h-screen overflow-hidden">
      <img
        src={Ceramah}
        alt=""
        className="object-cover object-center w-full h-screen"
      />
      <span className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-70">
        <div className="flex flex-col items-center justify-center w-full max-w-2xl gap-5 h-fit">
          <h1 className="text-4xl font-bold text-white">Ceramah</h1>
          <p className="text-lg text-center text-white">
            Cerita, Curhat, Doa & Muhasabah bersama Ustadz Hilman Fauzi. Kami
            hadir lebih dekat dengan Anda. Temukan event kami disini!
          </p>
          <button className="px-6 py-2 text-xl text-white uppercase border border-white rounded-md bg-none">
            Daftar Sekarang!
          </button>
        </div>
      </span>
    </section>
  );
};

export default HeroSection;
