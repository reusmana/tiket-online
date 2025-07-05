import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import NavbarDashboard from "../../components/Dashboard/Navbar";
import DrawerDashboard from "../../components/Dashboard/Drawer";
import { getCookies } from "../../lib/cookie";

const Dashboard = () => {
  const navigate = useNavigate();
  const authorization = getCookies("accessToken");
  const location = useLocation();
  const [open, setOpen] = useState<boolean>(false);
  const [isAuthorizedChecked, setIsAuthorizedChecked] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    console.log(location);
    if (authorization === undefined) {
      navigate("/login", { replace: true });
    } else {
      setIsAuthorizedChecked(true);
    }
  }, [location, authorization, navigate]);

  if (!isAuthorizedChecked) {
    return null;
  }
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-full min-h-screen text-2xl bg-black/50 text-secondary">
          <span className="min-h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em]"></span>
        </div>
      }
    >
      <div className="relative flex flex-col w-full h-full min-h-screen bg-[#F5F5F5]">
        <NavbarDashboard onClick={handleOpen} />
        <DrawerDashboard open={open} handleOpen={handleOpen} />
        <div className="flex w-full overflow-hidden h-[calc(100vh-80px)]">
          <Sidebar />
          <section className=" flex flex-col w-full p-4 h-[calc(100vh-80px)] overflow-scroll transition-all duration-1000 ease-in-out bg-white">
            <div className="flex flex-col items-start justify-start">
              <Outlet />
            </div>
          </section>
        </div>
      </div>
    </Suspense>
  );
};

export default Dashboard;
