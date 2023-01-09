import React from "react";
import genres, { Genre } from "../assets/constants";
import Loader from "./Loader";

function Discover() {
  // const { data, isFetching, error } = useGetTracksQuery();
  const isFetching = false;

  if (!isFetching) {
    return <Loader />;
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
          <div key={song}>songcard</div>
        ))}
      </div>
    </div>
  );
}

export default Discover;
