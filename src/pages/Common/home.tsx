import HeroSection from "../../components/Home/HeroSection";
import EventSection from "../../components/Home/EventSection";
import GallerySection from "../../components/Home/GallerySection";
import FaqSection from "../../components/Home/FaqSection";

const Home = () => {
  return (
    <div className="relative flex flex-col w-full -top-20">
      <HeroSection />
      <EventSection />
      <GallerySection />
      <FaqSection />
    </div>
  );
};

export default Home;
