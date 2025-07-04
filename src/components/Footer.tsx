import React from "react";
import Logo from "../assets/images/Logo MH (White).png";
import titkok from "../assets/icons/Tiktok.png";
import ig from "../assets/icons/Ig.png";

const Footer: React.FC = () => {
  return (
    <footer
      id="info"
      className="flex flex-col items-center justify-center w-full min-h-[561px] bg-black z-[999]"
    >
      <div className="flex flex-col items-start justify-around w-full max-w-screen-xl gap-4 px-2 lg:gap-10 lg:flex-row">
        <div className="flex flex-col items-start justify-center w-full mt-6 lg:gap-4 lg:mt-0 ">
          <h1 className="text-2xl font-semibold text-white">
            <img src={Logo} alt="" className="max-w-[220px]" />
          </h1>
          <p className="text-base text-white ">Menata Hati, Tenangkan Hatimu</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full lg:items-start ">
          <h4 className="text-2xl font-bold text-white uppercase ">Kontak</h4>
          <div className="flex flex-col items-start justify-start w-full gap-2 mt-10">
            <a href="#" className="text-xl text-white hover:underline">
              +62 821-1301-2721
            </a>
            <span className="text-xl text-white ">menatahati@gmail.com</span>
            <div className="flex">
              <a href="">
                <img src={titkok} alt="" className="h-[41px]" />
              </a>
              <a href="">
                <img src={ig} alt="" className="h-[41px]" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full ">
          <h4 className="text-2xl font-bold text-white uppercase ">Alamat</h4>
          <div className="flex flex-col items-center gap-5 mt-10 text-white">
            <span>
              Jl drupada V 1 perumahan indraprasta 2, Rt/Rw : 04/13, Tegal
              Gundil, Kec. Bogor Utara, Kota Bogor
            </span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63422.35395027188!2d106.79873769822365!3d-6.53467537053275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c142e5b85db9%3A0xfe32de1969287bfb!2sRAMAYANA%20Cibinong!5e0!3m2!1sen!2sid!4v1751582581456!5m2!1sen!2sid"
              width="600"
              height="450"
              className="max-w-[468px] w-full rounded-2xl h-[252px]"
              style={{
                border: 0,
              }}
              // allowTo
              // allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-center w-full pb-2 mt-5 text-sm font-medium text-white lg:mt-16 lg:text-lg">
        Copyright © {new Date().getFullYear()} - All right reserved
      </div> */}
    </footer>
  );
};

export default Footer;
