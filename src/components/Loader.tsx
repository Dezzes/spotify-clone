import React from "react";
import loader from "../assets/loader.svg";

interface LoaderProps {
  title?: string;
}

function Loader({ title }: LoaderProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
      <h1 className="font-bold text-2xl text-white mt-2">{title}</h1>
    </div>
  );
}
Loader.defaultProps = {
  title: "Loading...",
};

export default Loader;
