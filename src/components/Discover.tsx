import React from "react";
import genres, { Genre } from "../assets/constants";
import Loader from "./Loader";
import Error from "./Error";
import SongCard from "./SongCard";
import { shazamApi } from "../redux/services/shazam";
import { Track } from "../redux/services/shazam";

function Discover() {
  const { data, isFetching, error } = shazamApi.useGetTracksQuery();
  if (isFetching) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-left text-white">Discover</h2>
        <select
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
          id="discover"
        >
          {genres.map((genre: Genre) => (
            <option key={genre.id} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks.map((song: Track, i: number) => (
          <SongCard song={song} key={song.key} index={i} />
        ))}
      </div>
    </div>
  );
}

export default Discover;
