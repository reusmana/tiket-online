import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[999999999999999]">
      <span className="flex items-center justify-center h-20 border-l-2 border-white rounded-full min-w-20 animate-spin">
        <span className="flex h-10 bg-white rounded-full min-w-10"></span>
      </span>
    </div>
  );
};

export default Loading;
