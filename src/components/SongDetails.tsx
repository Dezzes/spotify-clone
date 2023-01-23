/* eslint-disable react/no-array-index-key */
import React from "react";
import { useParams } from "react-router-dom";
import { text } from "stream/consumers";
import shazamApi from "../redux/services/shazam";
import DetailsHeader from "./DetailsHeader";

interface MyParams {
  songId: string;
}

function SongDetails() {
  const { songId } = useParams<keyof MyParams>() as MyParams;
  const { data: songDetails } = shazamApi.useGetTrackDetailsQuery(songId);
  console.log(songDetails);
  if (!songDetails) {
    return <p className="text-gray-400 text-base my-1">Song details not found</p>;
  }
  return (
    <div className="flex flex-col">
      <DetailsHeader songDetails={songDetails} />
      <div className="mt-8">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {songDetails.sections && songDetails.sections[1].type === "LYRICS" ? (
            songDetails.sections[1].text?.map((line, i) => (
              <p className="text-gray-400 text-base my-1" key={i}>
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">Lyrics not found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SongDetails;
