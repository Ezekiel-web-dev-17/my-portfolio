import React from "react";

const LoaderComp = () => {
  return (
    <div className="flex justify-center items-center h-4">
      <div
        className={`w-4 h-4 border-4 border-[#000] border-t-transparent rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default LoaderComp;
