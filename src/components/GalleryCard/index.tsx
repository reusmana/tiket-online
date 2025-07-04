import React from "react";
import { cn } from "../../lib/utils";

const GaleryCard: React.FC<{
  className?: string;
  Image1: string;
  isAddMarker?: boolean;
  children?: React.ReactNode;
}> = ({ className, Image1, isAddMarker, children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        "max-w-[467px] min-h-[400px] w-full rounded-xl overflow-hidden relative",
        className
      )}
    >
      {isAddMarker && (
        <span className="absolute top-0 left-0 z-10 flex justify-center w-full h-fit">
          <h1 className="mt-2 text-xl font-bold text-white uppercase">
            {children}
          </h1>
        </span>
      )}
      <img
        src={Image1}
        alt={Image1}
        className="object-cover hover:scale-[106%] transition-transform ease-in-out duration-1000 w-full h-full "
      />
    </div>
  );
};

export default GaleryCard;
