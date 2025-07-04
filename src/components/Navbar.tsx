import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { cn } from "../lib/utils";
import { useMediaQuery } from "react-responsive";
import logo from "../assets/images/Logo MH.png";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState<boolean>(false);
  const [isHomePage, setIsHomePage] = useState<boolean>(true);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        if (currentScrollY < 100) {
          setShowNavbar(true);
          return;
        }
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={cn(
        "top-10 rounded-full flex justify-center w-full sticky max-w-[1480px] mx-auto h-20 z-[999999] bg-white transition-transform duration-1000 ease-in-out text-slate-700",
        showNavbar ? "translate-y-0" : "-translate-y-[200%]"
      )}
    >
      <div className="flex items-center justify-between w-full h-full px-10 max-w-screen-2xl">
        <div className="flex items-center justify-start gap-2">
          <button className="block text-2xl lg:hidden" onClick={handleOpen}>
            <GiHamburgerMenu />
          </button>
          <img src={logo} alt="" className="h-10" />
        </div>
        <div
          className={`absolute inset-0 w-full bg-black bg-opacity-50 z-[88] h-screen lg:hidden flex transition-opacity duration-300 ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={handleOpen}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className={cn(
              "absolute top-0 w-[calc(100%-8rem)] bg-white z-[88] h-screen flex items-center justify-center text-slate-700 duration-1000 transition-all ease-in-out",
              open ? "translate-x-[-0%]" : "translate-x-[-100%]"
            )}
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
            <Link
              to="/"
              className={cn(
                location.pathname === "/" && "text-primary font-bold"
              )}
            >
              Home
            </Link>
          </li>
          <li className="text-lg font-medium ">
            <Link
              to="/event"
              className={cn(
                location.pathname === "/event" && "text-primary font-bold"
              )}
            >
              Event
            </Link>
          </li>
          <li className="text-lg font-medium ">
            <Link
              to="/galery"
              className={cn(
                location.pathname === "/galery" && "text-primary font-bold"
              )}
            >
              Galery
            </Link>
          </li>
          <li className="text-lg font-medium ">
            <a
              href="#faq"
              className={cn(
                location.pathname === "/information" && "text-primary font-bold"
              )}
            >
              Information
            </a>
          </li>
          <li className="text-lg font-medium ">
            <a
              href="#info"
              className={cn(
                location.pathname === "/contact" && "text-primary font-bold"
              )}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex gap-3">
          <Link to="/register">
            <button className="px-4 py-2 text-white rounded-full bg-primary text-md">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="px-4 py-2 text-white rounded-full bg-tertiary text-md">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
