import React from "react";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { Link } from "react-router-dom";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import "./Components Css/SongCard.css";


export default function SongCard({ song, i, isPlaying, activeSong, data }) {
  
  const dispatch = useDispatch();
  const handlePauseClick =()=>{
    dispatch(playPause(false));
  }
  const handlePlayClick =()=>{
    dispatch(setActiveSong({song,data,i}));
    dispatch(playPause(true));
  }
  return (
    <div className='songCard' >
      <div className="songCardParent group">
        <div className={`playBtn   ${activeSong?.title === song.title ?  ' activeClass' : ' hiddenClass'}`}>
          <PlayPause activeSong={activeSong} isPlaying={isPlaying} song={song} handlePause={handlePauseClick} handlePlay={handlePlayClick} />
        </div> 
        <img src={song.images?.coverart} alt="" />
      </div>
      <div className="songInfo">
        <p className="title">
          <Link to={`songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="subTitle">
          <Link
            to={
              song.artists
                ? `/artists/${song.artists[0]?.adamid}`
                : "top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
}
