import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

type sidebarProps = {
  router: { path: string; name: string }[];
};
const Sidebar: React.FC<sidebarProps> = ({ router }) => {
  return (
    <div
      className={cn(
        "relative lg:min-w-72 w-0 z-[99999] h-[calc(100vh-80px)] lg:block hidden bg-[#F5F5F5] duration-1000 transition-all ease-in-out "
      )}
    >
      <ul className="flex flex-col px-4 py-6 sidebar">
        {router.map((item, index) => (
          <li
            key={index}
            className={cn(
              "flex items-start justify-start  border-slate-100 py-2 rounded-lg text-secondary",
              location.pathname === item.path &&
                "border-primary bg-slate-900 border-l-4 text-white"
            )}
          >
            <Link to={item.path} className="ml-2 text-xl font-bold ">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
