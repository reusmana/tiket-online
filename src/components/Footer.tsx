import React from "react";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-end w-full min-h-64 bg-slate-700 z-[999]">
      <div className="flex flex-col items-center justify-around w-full max-w-screen-xl gap-4 px-2 lg:gap-10 lg:flex-row">
        <div className="flex flex-col items-start justify-center w-full mt-6 lg:gap-4 lg:mt-0 ">
          <h1 className="text-2xl font-semibold text-white">
            <a href="#">Header</a>
          </h1>
          <p className="text-sm text-white ">
            Jl. Drupada V 1 perumahan indraprasta 2, Tegal Gundil, Kota Bogor
          </p>
        </div>
        <div className="flex flex-col items-start justify-center w-full lg:items-center ">
          <div className="flex flex-col items-start justify-center gap-1 lg:gap-4 ">
            <h4 className="text-sm font-bold text-white uppercase ">
              Informasi
            </h4>
            <a href="#" className="text-sm text-white hover:underline">
              Hubungi Kami
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full lg:items-center ">
          <div className="flex flex-col items-start justify-center gap-1 lg:gap-4 ">
            <h4 className="text-sm font-bold text-white uppercase ">
              Sosial Media
            </h4>
            <div className="flex items-center gap-2 text-2xl text-white">
              <FaInstagram />
              <FaTiktok />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full pb-2 mt-5 text-sm font-medium text-white lg:mt-16 lg:text-lg">
        Copyright © {new Date().getFullYear()} - All right reserved
      </div>
    </footer>
  );
};

export default Footer;
