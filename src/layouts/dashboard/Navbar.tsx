import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";
import { RiUserSmileLine } from "react-icons/ri";
import Logo from "../../assets/images/Logo MH.png";

type NavbarDashboardProps = {
  onClick: () => void;
};

const NavbarDashboard: React.FC<NavbarDashboardProps> = ({
  onClick: handleOpen,
}) => {
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
      <Button className="w-10 h-10 border rounded-full cursor-pointer min-w-10 hover:outline-8 outline-secondary outline">
        <RiUserSmileLine className="w-full h-full" />
      </Button>
    </nav>
  );
};

export default NavbarDashboard;
