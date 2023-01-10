import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

function PlayPause() {
  const [isActive, setisActive] = React.useState(true);
  return { isActive } ? (
    <FaPauseCircle size={35} className="text-gray-300" />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" />
  );
}

export default PlayPause;
