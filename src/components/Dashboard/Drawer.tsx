import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

type DrawerProps = {
  open: boolean;
  handleOpen: () => void;
  router: { path: string; name: string }[];
};

const DrawerDashboard: React.FC<DrawerProps> = ({
  open,
  handleOpen,
  router,
}) => {
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
          {router.map((item, index) => (
            <li
              key={index}
              className={cn(
                "text-lg font-medium border-l-4 border-primary w-full py-2",
                location.pathname === item.path && "bg-slate-900 text-white"
              )}
            >
              <Link to={item.path} className="pl-2">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DrawerDashboard;
