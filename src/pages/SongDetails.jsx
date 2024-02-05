import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/ShzamCore";
import "./Css files/songDetails.css";

export default function SongDetails() {
  const { songid } = useParams();
  const dispatch = useDispatch();
  const {
    data,
    isFetching: isFetchingSongDetail,
    error,
  } = useGetSongRelatedQuery({ songid });
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  console.log("song id is :: ", songid);
  if (isFetchingSongDetail)
    return <Loader title="song details is loading..." />;
  if (error) return <Error />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="songDetails">
      <DetailsHeader artistId="" songData={songData} />
      <div className="lyricsParent">
        <h2>Lyrics:</h2>
        <div className="lyrics">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => <p key={i}>{line}</p>)
          ) : (
            <p>sorry song lyrics not found....</p>
          )}
        </div>
      </div>
      <RelatedSongs isPlaying={isPlaying} data={data} activeSong={activeSong} handlePauseClick={handlePauseClick} handlePlayClick={handlePlayClick} artistId='' />
    </div>
  );
}
