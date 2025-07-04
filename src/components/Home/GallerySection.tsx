import GaleryCard from "../GalleryCard";
import Image2 from "../../assets/galery2.png";
import { Link } from "react-router-dom";

const GallerySection = () => {
  return (
    <section className="w-full galery bg-secondary ">
      <div className="flex flex-col items-start justify-start w-full max-w-[1480px] px-2 py-20 mx-auto">
        <h1 className="w-full text-4xl font-normal text-center text-white lg:text-8xl">
          Album Foto Menata Hati
        </h1>
        <div className="grid w-full gap-4 pt-20 lg:grid-cols-3">
          <GaleryCard Image1={Image2}></GaleryCard>
          <GaleryCard Image1={Image2}></GaleryCard>
          <GaleryCard Image1={Image2}></GaleryCard>
        </div>
      </div>
      <Link
        to="/"
        className="flex items-center justify-center px-10 py-4 mx-auto mb-20 text-white border border-white rounded-full lg:text-5xl w-fit"
      >
        Lihat lebih lanjut
      </Link>
    </section>
  );
};

export default GallerySection;
