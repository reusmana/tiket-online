import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import Drawer from "../../components/Drawer";

const Guests = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#F5F5F5]">
      <Navbar onClick={handleOpen} />
      <Drawer open={open} handleOpen={handleOpen} />
      <section className="relative flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <Outlet />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Guests;
