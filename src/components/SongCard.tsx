import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/reduxHooks";
import { Track, TracksResponse } from "../models/TrackResponse";
import { playPause, setActiveSong } from "../redux/reducers/playerSlice";
import PlayPause from "./PlayPause";
import { SetActiveSong } from "../redux/reducers/playerSlice";

interface SongCardProps {
  song: Track;
  index: number;
  tracks: Track[];
  isPlaying: boolean;
  activeSong: Track;
}

function SongCard({ song, index, tracks, activeSong, isPlaying }: SongCardProps) {
  const dispatch = useAppDispatch();
  function handlePauseClick() {
    console.log("pause");
    dispatch(playPause(false));
  }
  function handlePlayClick() {
    console.log("play");
    dispatch(setActiveSong({ track: song, tracks, index }));
    dispatch(playPause(true));
  }
  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 
        bg-opacity-80 backdrop-blur-sm rounded-lg cursor-pointer"
    >
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center 
        bg-black bg-opacity-50 group-hover:flex ${
          activeSong.title === song.title ? "flex bg-black bg-opacity-70" : "hidden"
        }
        `}
        >
          <PlayPause
            activeSong={activeSong}
            handlePause={() => handlePauseClick()}
            handlePlay={() => handlePlayClick()}
            isPlaying={isPlaying}
            song={song}
          />
        </div>
        <img src={song.images?.coverart} alt="song-img" />
      </div>
      <div className="flex flex-col mt-4">
        <p className="text-white font-bold">
          <Link to={song.url}>{song.title}</Link>
        </p>
        <p className="text-gray-400">{song.subtitle}</p>
      </div>
    </div>
  );
}

export default SongCard;
