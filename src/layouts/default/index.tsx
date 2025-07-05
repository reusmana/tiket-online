import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import Drawer from "../../components/Drawer";
import { getCookies } from "../../lib/cookie";

const Default = () => {
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

export default Default;
