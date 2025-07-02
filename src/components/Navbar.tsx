import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { cn } from "../lib/utils";
import { useMediaQuery } from "react-responsive";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [scroll, setScroll] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [isHomePage, setIsHomePage] = useState<boolean>(true);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    if (location.pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }

    window.scrollTo(0, 0);
  }, [location]);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    // if (isMobile) {
    //   setOpen(false);
    // } else {
    //   setOpen(true);
    // }
  }, [isMobile, open]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 30);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });
  return (
    <nav
      className={cn(
        "fixed top-0 flex justify-center w-full h-20 z-[999999]  bg-transparent transition-colors duration-300 ease-in-out text-slate-700",
        scroll && "backdrop-blur-md bg-black/50 text-white",
        isHomePage && "text-white"
      )}
    >
      <div className="flex items-center justify-between w-full h-full px-2 max-w-screen-2xl">
        <div className="flex items-center justify-start gap-2">
          <button className="block text-2xl lg:hidden" onClick={handleOpen}>
            <GiHamburgerMenu />
          </button>
          <h1 className="text-2xl font-semibold ">
            <a href="#">Header</a>
          </h1>
        </div>
        <div
          className={`absolute inset-0 w-full bg-black bg-opacity-50 z-[88] h-screen lg:hidden flex ${
            open ? "block" : "hidden"
          }`}
          onClick={handleOpen}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="absolute top-0 inset-0 w-[calc(100%-8rem)] bg-slate-200   z-[88] h-screen flex items-center justify-center text-slate-700"
          >
            <ul className="flex flex-col items-center justify-center gap-10">
              <li className="text-lg font-medium">
                <Link to="/">Home</Link>
              </li>
              <li className="text-lg font-medium">
                <Link to="/event">Event</Link>
              </li>
              <li className="text-lg font-medium">
                <a href="#">Galery</a>
              </li>
            </ul>
          </div>
        </div>
        <ul className="items-center justify-center hidden gap-10 lg:flex">
          <li className="text-lg font-medium ">
            <Link to="/">Home</Link>
          </li>
          <li className="text-lg font-medium ">
            <Link to="/event">Event</Link>
          </li>
          <li className="text-lg font-medium ">
            <a href="#">Galery</a>
          </li>
        </ul>
        <Link to="/login">
          <button className="bg-red-300 px-4 py-1.5 rounded-md text-md text-white">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
