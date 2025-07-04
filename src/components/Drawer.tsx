import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

type DrawerProps = {
  open: boolean;
  handleOpen: () => void;
};

const Drawer: React.FC<DrawerProps> = ({ open, handleOpen }) => {
  return (
    <div
      className={`fixed inset-0 w-full min-h-screen  bg-black bg-opacity-50 z-[99999999999] h-screen lg:hidden flex transition-opacity duration-300 ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={handleOpen}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={cn(
          "absolute top-0 w-[calc(100%-8rem)] bg-white z-[88] min-h-screen h-full flex items-center justify-center text-slate-700 duration-1000 transition-all ease-in-out",
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
            <Link to="/galery">Galery</Link>
          </li>
          <li className="text-lg font-medium">
            <a href="#faq">Information</a>
          </li>
          <li className="text-lg font-medium">
            <a href="#info">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
