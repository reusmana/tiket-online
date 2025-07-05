import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

type DrawerProps = {
  open: boolean;
  handleOpen: () => void;
};

const DrawerDashboard: React.FC<DrawerProps> = ({ open, handleOpen }) => {
  const location = useLocation();
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
          "absolute top-0 w-[calc(100%-8rem)] bg-white z-[88]  min-h-screen h-full flex items-center justify-start text-slate-700 duration-1000 transition-all ease-in-out px-2",
          open ? "translate-x-[-0%]" : "translate-x-[-100%]"
        )}
      >
        <ul className="flex flex-col items-start justify-center w-full gap-10">
          <li
            className={cn(
              "text-lg font-medium border-l-4 border-primary w-full py-2",
              location.pathname === "/dashboard" && "bg-slate-900 text-white"
            )}
          >
            <Link to="/dashboard" className="pl-2">
              Dashboard
            </Link>
          </li>
          <li
            className={cn(
              "text-lg font-medium border-l-4 border-primary w-full py-2",
              location.pathname === "/dashboard/events" &&
                "bg-slate-900 text-white"
            )}
          >
            <Link to="/dashboard/events" className="pl-2">
              Event
            </Link>
          </li>
          <li
            className={cn(
              "text-lg font-medium border-l-4 border-primary w-full py-2",
              location.pathname === "/dashboard/riwayat" &&
                "bg-slate-900 text-white"
            )}
          >
            <Link to="/dashboard/riwayat" className="pl-2">
              Riwayat
            </Link>
          </li>
          <li
            className={cn(
              "text-lg font-medium border-l-4 border-primary w-full py-2",
              location.pathname === "/dashboard/profile" &&
                "bg-slate-900 text-white"
            )}
          >
            <Link to="/dashboard/profile" className="pl-2">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DrawerDashboard;
