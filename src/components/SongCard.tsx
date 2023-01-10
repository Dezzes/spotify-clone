import React from "react";
import { Link } from "react-router-dom";
import { Track } from "../redux/services/shazam";
import PlayPause from "./PlayPause";

interface SongCardProps {
  song: Track;
  index: number;
}

function SongCard({ song, index }: SongCardProps) {
  const activeSong = "test";

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 
        bg-opacity-80 backdrop-blur-sm animate-pulse rounded-lg cursor-pointer"
    >
      <div className="relative w-full h-56 group">
        <div className="flex absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex">
          <PlayPause />
        </div>
        <img src={song.images?.coverart} alt="song-img" />
      </div>
      <div className="flex flex-col mt-4">
        <p>
          <Link to={song.url}>{song.title}</Link>
        </p>
        <p>{song.subtitle}</p>
      </div>
    </div>
  );
}

export default SongCard;
