import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

type SidebarProps = {
  setOpen?: (open: boolean) => void;
};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div
      className={cn(
        "relative lg:min-w-72 w-0 z-[99999] h-[calc(100vh-80px)] lg:block hidden bg-[#F5F5F5] duration-1000 transition-all ease-in-out "
      )}
    >
      <ul className="flex flex-col px-4 py-6 sidebar">
        <li
          className={cn(
            "flex items-start justify-start  border-slate-100 py-2 rounded-lg text-secondary",
            location.pathname === "/dashboard" &&
              "border-primary bg-slate-900 border-l-4 text-white"
          )}
        >
          <Link to="/dashboard" className="ml-2 text-3xl font-bold ">
            Dashboard
          </Link>
        </li>
        <li
          className={cn(
            "flex items-start justify-start  border-slate-100 py-2 rounded-lg text-secondary",
            location.pathname === "/dashboard/events" &&
              "border-primary bg-slate-900 border-l-4 text-white"
          )}
        >
          <Link to="/dashboard/events" className="ml-2 text-xl font-bold ">
            Event
          </Link>
        </li>
        <li
          className={cn(
            "flex items-start justify-start  border-slate-100 py-2 rounded-lg text-secondary",
            location.pathname === "/dashboard/riwayat" &&
              "border-primary bg-slate-900 border-l-4 text-white"
          )}
        >
          <Link to="/dashboard/riwayat" className="ml-2 text-xl font-bold ">
            Riwayat
          </Link>
        </li>
        <li
          className={cn(
            "flex items-start justify-start  border-slate-100 py-2 rounded-lg text-secondary",
            location.pathname === "/dashboard/profile" &&
              "border-primary bg-slate-900 border-l-4 text-white"
          )}
        >
          <Link to="/dashboard/profile" className="ml-2 text-xl font-bold ">
            Update Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
