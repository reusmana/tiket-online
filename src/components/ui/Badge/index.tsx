import React from "react";
import { cn } from "../../../lib/utils";

const Badge: React.FC<{
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}> = ({ className, onClick, children, ...props }) => {
  return (
    <span
      {...props}
      onClick={onClick}
      className={cn(
        "px-6 py-1 text-sm rounded-md bg-slate-100 hover:bg-slate-400 text-slate-700 hover:text-white bg-none",
        className
      )}
    >
      <h1>{children}</h1>
    </span>
  );
};

export default Badge;
