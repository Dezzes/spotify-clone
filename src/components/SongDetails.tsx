import React from "react";
import { useParams } from "react-router-dom";

function SongDetails() {
  const { songId } = useParams();
  console.log(songId);
  return <div>SongDetails</div>;
}

export default SongDetails;
