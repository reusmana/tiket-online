import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { RiUserSmileLine } from "react-icons/ri";
import Logo from "../../assets/images/Logo MH.png";
import { useState } from "react";
import fetchApi from "../../lib/fetch-api";
import { removeCookies } from "../../lib/cookie";
import { cn } from "../../lib/utils";

type NavbarDashboardProps = {
  onClick: () => void;
};

const NavbarDashboard: React.FC<NavbarDashboardProps> = ({
  onClick: handleOpen,
}) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleLogout = async () => {
    const confirm = window.confirm("Are you sure you want to logout?");
    if (!confirm) return;
    setIsLoading(true);
    const response = await fetchApi.post("/logout");
    if (response.status !== 204) {
      setIsLoading(false);
      return;
    }
    removeCookies("accessToken");
    setIsLoading(false);
    navigate("/login", { replace: true });
  };
  return (
    <nav className="w-full h-20 z-[99] flex justify-between items-center px-4 sticky top-0 bg-[#F5F5F5]">
      <div className="flex items-center justify-start gap-2 text-3xl font-bold bg-transparent">
        <Button
          className="text-2xl text-black bg-transparent lg:hidden w-fit"
          onClick={() => {
            handleOpen();
          }}
        >
          <GiHamburgerMenu className="" />
        </Button>
        <Link to="/">
          <img src={Logo} alt="" className="h-10 pl-2" />
        </Link>
      </div>
      <Button className="w-10 h-10 border rounded-full cursor-pointer group min-w-10 hover:outline-8 outline-secondary outline">
        <RiUserSmileLine
          className={cn("w-full h-full", isLoading && "animate-spin")}
        />
        <div className="p-6 bg-white w-[16em] absolute right-0 group-hover:flex drop-shadow-xl shadow-xl border rounded-md hidden flex-col gap-4">
          <div
            onClick={() => {
              handleLogout();
            }}
            className="px-4 py-1.5 lg:py-2 w-full text-white rounded-full bg-tertiary text-md cursor-pointer"
          >
            Logout
          </div>
        </div>
      </Button>
    </nav>
  );
};

export default NavbarDashboard;
