import { FaArrowRightLong } from "react-icons/fa6";
import Image1 from "../../assets/galery1.png";
import Image2 from "../../assets/galery2.png";
import { Link } from "react-router-dom";
import CardsEvent from "../../components/CardEvents/Index";
import HeroSection from "../../components/Home/HeroSection";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <section className="flex flex-col w-full max-w-screen-xl gap-10 px-2 py-10 mx-auto overflow-scroll lg:py-32 md:py-16">
        <div className="flex items-center justify-start h-20 gap-4 lg:h-24 md:h-20">
          <span className="w-2 h-full bg-blue-400"></span>
          <div className="flex flex-col items-start justify-between h-full gap-4">
            <h1 className="text-3xl font-bold lg:text-5xl md:text-4xl">
              Event Terdekat
            </h1>
            <p className="text-lg font-normal lg:text-xl lg:font-medium">
              Menata hati yang akan datang
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start w-full gap-4 overflow-scroll lg:justify-center">
          {["Yogyakarta", "Jakarta", "Bandung", "Bogor", "Lainnya"].map(
            (item, index) => (
              <button
                key={index}
                className="px-6 py-1 text-sm rounded-md bg-slate-100 hover:bg-slate-400 text-slate-700 hover:text-white bg-none"
              >
                <h1>{item}</h1>
              </button>
            )
          )}
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 card">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <div key={index} className="w-full">
              <CardsEvent />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center py-3">
          <Link
            to="/event"
            className="flex items-center gap-6 px-6 py-2 text-xl rounded-md text-slate-700 bg-slate-100 bg-none"
          >
            Lihat Semua Event
            <FaArrowRightLong />
          </Link>
        </div>
      </section>
      <section className="w-full galery bg-slate-800 ">
        <div className="flex flex-col items-start justify-start w-full max-w-screen-xl px-2 py-6 mx-auto">
          <div className="flex items-center justify-start h-8 gap-4 lg:h-12">
            <span className="w-2 h-full bg-blue-400"></span>
            <h1 className="text-3xl font-bold text-white lg:text-5xl">
              Galeri Acara
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-4 py-8">
            <div className="relative col-span-4 overflow-hidden rounded-lg lg:col-span-2">
              <span className="absolute top-0 left-0 z-10 flex justify-center w-full h-fit">
                <h1 className="mt-2 text-xl font-bold text-white uppercase">
                  Ceramah
                </h1>
              </span>
              <img
                src={Image1}
                alt=""
                className="object-cover hover:scale-[102%] transition-transform ease-in-out duration-1000 "
              />
            </div>
            <img
              src={Image1}
              alt=""
              className="object-cover hover:scale-[102%] transition-transform ease-in-out duration-1000  col-span-4 lg:col-span-2 overflow-hidden rounded-lg"
            />
            <img
              src={Image1}
              alt=""
              className="object-cover hover:scale-[102%] transition-transform ease-in-out duration-1000  col-span-4 lg:col-span-2 overflow-hidden rounded-lg"
            />
            <img
              src={Image1}
              alt=""
              className="object-cover hover:scale-[102%] transition-transform ease-in-out duration-1000  col-span-4 lg:col-span-2 overflow-hidden rounded-lg"
            />
            <img
              src={Image2}
              alt=""
              className="object-cover hover:scale-[102%] transition-transform ease-in-out duration-1000 col-span-2 lg:col-span-1 overflow-hidden rounded-lg"
            />
            <div className="relative col-span-2 overflow-hidden rounded-lg lg:col-span-1">
              <span className="absolute top-0 left-0 z-10 flex justify-center w-full h-fit">
                <h1 className="mt-2 text-xl font-bold text-white uppercase">
                  Ceramah
                </h1>
              </span>
              <img
                src={Image2}
                alt=""
                className="object-cover hover:scale-[102%] transition-transform ease-in-out duration-1000 "
              />
            </div>
            <img
              src={Image2}
              alt=""
              className="object-cover hover:scale-[102%] transition-transform ease-in-out duration-1000  col-span-2 lg:col-span-1 overflow-hidden rounded-lg"
            />
            <img
              src={Image2}
              alt=""
              className="object-cover hover:scale-[102%] transition-transform ease-in-out duration-1000  col-span-2 lg:col-span-1 overflow-hidden rounded-lg"
            />
            <img
              src={Image2}
              alt=""
              className="object-cover hover:scale-[102%] transition-transform ease-in-out duration-1000  col-span-2 lg:col-span-1 overflow-hidden rounded-lg"
            />
            <img
              src={Image2}
              alt=""
              className="object-cover hover:scale-[102%] transition-transform ease-in-out duration-1000  col-span-2 lg:col-span-1 overflow-hidden rounded-lg"
            />
            <img
              src={Image2}
              alt=""
              className="object-cover hover:scale-[102%] transition-transform ease-in-out duration-1000  col-span-2 lg:col-span-1 overflow-hidden rounded-lg"
            />
            <img
              src={Image2}
              alt=""
              className="object-cover hover:scale-[102%] transition-transform ease-in-out duration-1000  col-span-2 lg:col-span-1 overflow-hidden rounded-lg"
            />
            <img
              src={Image2}
              alt=""
              className="object-cover hover:scale-[102%] transition-transform ease-in-out duration-1000  col-span-2 lg:col-span-1 overflow-hidden rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
