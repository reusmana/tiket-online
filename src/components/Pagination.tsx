"use client";
import React, { useEffect } from "react";

type PaginationProps = {
  count: number;
  setAction: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ count, setAction }) => {
  const [isActive, setisActive] = React.useState<number>(1);
  const [pageNumber, setPageNumber] = React.useState<(string | number)[]>([]);

  useEffect(() => {
    if (!count) return;
    const pageNumbers = [];
    // Display pages logic with ellipses
    if (count <= 4) {
      for (let i = 1; i <= count; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (isActive <= 3) {
        pageNumbers.push(1, 2, 3, "...", count);
      } else if (isActive >= count - 2) {
        pageNumbers.push(1, "...", count - 3, count - 2, count - 1, count);
      } else {
        pageNumbers.push(
          1,
          "...",
          isActive - 1,
          isActive,
          isActive + 1,
          "...",
          count
        );
      }
    }
    setPageNumber(pageNumbers);
  }, []);

  useEffect(() => {
    const pageNumbers = [];
    // Display pages logic with ellipses
    if (count <= 4) {
      for (let i = 1; i <= count; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (isActive <= 3) {
        pageNumbers.push(1, 2, 3, "...", count);
      } else if (isActive >= count - 2) {
        pageNumbers.push(1, "...", count - 2, count - 1, count);
      } else {
        pageNumbers.push(
          1,
          "...",
          isActive - 1,
          isActive,
          isActive + 1,
          "...",
          count
        );
      }
    }
    setPageNumber(pageNumbers);
  }, [isActive]);

  const handlePage = (page: number) => {
    setisActive(page);
    setAction?.(page);
  };
  return (
    <div>
      <div className="flex gap-3 text-[13px] font-semibold text-slate-3 items-center">
        {isActive > 1 ? (
          <button
            onClick={() => handlePage(isActive - 1)}
            className="flex items-center justify-center w-full h-10 text-white min-w-16 bg-primary"
          >
            Prev
          </button>
        ) : (
          <button className="flex items-center justify-center w-full h-10 text-white cursor-not-allowed disabled opacity-30 min-w-16 bg-primary ">
            Prev
          </button>
        )}
        <ul className="flex items-center gap-1 text-xl">
          {pageNumber.length > 0 &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            pageNumber.map((val: any, index) =>
              typeof val === "number" ? (
                <li key={index}>
                  <button
                    className={`paginate lg:min-w-16 min-w-5 h-10 ${
                      isActive === val && "text-primary font-bold"
                    }`}
                    onClick={() => handlePage(val)}
                  >
                    {val}
                  </button>
                </li>
              ) : (
                <li key={index} className="paginate-three-dot">
                  ...
                </li>
              )
            )}
        </ul>
        {isActive < count ? (
          <button
            onClick={() => handlePage(isActive + 1)}
            className="flex items-center justify-center w-full h-10 text-white min-w-16 bg-primary"
          >
            Next
          </button>
        ) : (
          <button className="flex items-center justify-center w-full h-10 text-white cursor-not-allowed disabled opacity-30 min-w-16 bg-primary ">
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
