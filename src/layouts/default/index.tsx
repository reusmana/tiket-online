import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Default = () => {
  return (
    <div className="relative flex flex-col w-full h-full min-h-screen overflow-hidden">
      <Navbar />
      <section className="relative flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <Outlet />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Default;
