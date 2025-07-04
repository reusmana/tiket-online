import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { RiUserSmileLine } from "react-icons/ri";
import Button from "../../components/ui/Button";
import Sidebar from "../../components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/images/Logo MH.png";

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
      {/* <div className="absolute inset-0 bg-black bg-opacity-30 z-[99999999] flex py-20 justify-center items-center">
        <div className="w-full max-w-2xl bg-white rounded-lg min-h-20"></div>
      </div> */}
      <nav className="w-full h-20 z-[99] flex justify-between items-center px-4 sticky top-0 bg-[#F5F5F5]">
        <div className="flex items-center justify-start gap-2 text-3xl font-bold text-white">
          <Button
            className="block text-2xl lg:hidden"
            onClick={() => {
              handleOpen();
            }}
          >
            <GiHamburgerMenu />
          </Button>
          <Link to="/">
            <img src={Logo} alt="" className="h-10 pl-2" />
          </Link>
        </div>
        <Button className="w-10 h-10 border rounded-full cursor-pointer min-w-10 hover:outline-8 outline-slate-300 outline">
          <RiUserSmileLine className="w-full h-full" />
        </Button>
      </nav>
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
