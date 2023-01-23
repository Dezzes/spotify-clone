import React from "react";
import { SongDetailsResponse } from "../models/SongDetailsResponse";

interface DetailsHeaderProps {
  songDetails: SongDetailsResponse;
}
function DetailsHeader({ songDetails }: DetailsHeaderProps) {
  return (
    <div className="relative flex flex-col w-full">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-40 h-28">
        <div className="absolute inset-0 flex items-center">
          <img
            className="sm:w-40 w-28 sm:h-40 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
            src={songDetails.images.coverart}
            alt="coverart"
          />
          <div className="ml-5">
            <p className="font-bold sm:text-3xl text-xl text-white">{songDetails.title}</p>
            <p className="text-base text-gray-400 mt-2">{songDetails.subtitle}</p>
            <p className="text-base text-gray-400 mt-2">{songDetails.genres.primary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsHeader;
