import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GaleryCard from "../../components/GalleryCard";
import Image2 from "../../assets/galery2.png";
const Galery = () => {
  const loc = useLocation();
  useEffect(() => {
    const q = loc.search.split("=")[1];
    console.log(q);
  }, []);
  return (
    <section className="flex flex-col w-full max-w-screen-xl gap-10 px-2 py-20 mx-auto overflow-scroll lg:py-32">
      <div className="flex flex-col items-center justify-center w-full gap-1">
        <h1 className="text-3xl font-bold text-slate-700">Galery Kami</h1>
        <p className="text-lg text-center text-slate-700">
          Semua galery yang didokumentasikan oleh Menata Hati!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 card">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <div key={index} className="w-full">
            <GaleryCard Image1={Image2}></GaleryCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galery;
