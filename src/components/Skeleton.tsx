import React from "react";
import { cn } from "../lib/utils";

const Skeleton: React.FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <div
      className={cn(
        "w-full py-6 rounded-full bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 bg-[length:400%_100%] animate-shimmer",
        className
      )}
    ></div>
  );
};

export default Skeleton;
