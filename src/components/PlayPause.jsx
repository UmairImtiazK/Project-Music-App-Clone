import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import './Components Css/playPause.css';

export default function PlayPause({
  activeSong,
  isPlaying,
  song,
  handlePause,
  handlePlay,
}) {
  return isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle className="playPause" onClick={handlePause} />
  ) : (
    <FaPlayCircle className="playPause" onClick={handlePlay} />
  );
}
