import React from "react";

interface LoadProps {
  title?: string;
}

const Load: React.FC<LoadProps> = ({ title = "Loading..." }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold text-gray-700">{title}</p>
    </div>
  );
};

export default Load;
