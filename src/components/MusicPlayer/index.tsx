import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { playPause, changeSong } from "../../redux/reducers/playerSlice";

import Controls from "./Controls";
import Player from "./Player";
import Seekbar from "./Seekbar";
import TrackLine from "./TrackLine";
import VolumeBar from "./VolumeBar";

function MusicPlayer() {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } = useAppSelector(
    (state) => state.player
  );
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true));
  }, [currentIndex]);

  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(false));

    if (!shuffle) {
      dispatch(changeSong((currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(changeSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(changeSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(changeSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(changeSong(currentIndex - 1));
    }
  };

  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <TrackLine isPlaying={isPlaying} isActive={isActive} activeSong={activeSong} />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Controls
          isPlaying={isPlaying}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentSongs={currentSongs}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        <Seekbar
          value={appTime}
          min="0"
          max={duration}
          onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSeekTime(event.target.valueAsNumber)
          }
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          onEnded={handleNextSong}
          onTimeUpdate={(event: React.ChangeEvent<HTMLAudioElement>) =>
            setAppTime(event.target.currentTime)
          }
          onLoadedData={(event: React.ChangeEvent<HTMLAudioElement>) =>
            setDuration(event.target.duration)
          }
        />
      </div>
      <VolumeBar
        value={volume}
        min="0"
        max="1"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setVolume(event.target.valueAsNumber)
        }
        setVolume={setVolume}
      />
    </div>
  );
}

export default MusicPlayer;
