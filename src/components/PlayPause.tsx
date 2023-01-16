import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { Track } from "../models/TrackResponse";

interface PlayPauseProps {
  isPlaying: boolean;
  activeSong: Track;
  song: Track;
  handlePlay: () => void;
  handlePause: () => void;
}

function PlayPause({ handlePause, handlePlay, isPlaying, song, activeSong }: PlayPauseProps) {
  return isPlaying && song.title === activeSong.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );
}

export default PlayPause;
