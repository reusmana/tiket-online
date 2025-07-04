import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import NavbarDashboard from "./Navbar";
import DrawerDashboard from "./Drawer";

const Dashboard = () => {
  const location = useLocation();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <div className="relative flex flex-col w-full h-full min-h-screen bg-[#F5F5F5]">
      <NavbarDashboard onClick={handleOpen} />
      <DrawerDashboard open={open} handleOpen={handleOpen} />
      <div className="flex w-full overflow-hidden h-[calc(100vh-80px)]">
        <Sidebar open={open} />
        <section className=" flex flex-col w-full p-4 h-[calc(100vh-80px)] overflow-scroll transition-all duration-1000 ease-in-out bg-white">
          <div className="flex flex-col items-start justify-start">
            <Outlet />
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Dashboard;
