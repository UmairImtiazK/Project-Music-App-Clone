import "./Css files/Discover.css";
import { genres } from "../assets/constants";
import SongCard from "../components/SongCard";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useDispatch, useSelector } from "react-redux";
import {  useGetSongsByGenreQuery } from "../redux/services/ShzamCore";
import { selectGenreListId } from "../redux/features/playerSlice";

export default function Discover() {
  const dispatch = useDispatch();
  const { isPlaying, activeSong, genreListId } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');

  console.log(data);
  if (isFetching) return <Loader title="Songs is Loading...." />;

  if (error) {
    return <Error />;
  }

  return (
    <section className="discoverSection">
      <div className="topMostCont">
        <h1 className="title">Discover {genreListId} </h1>
        <div className="songTrack">
          <select name="DropDown" id="dropDown" onChange={(e)=> dispatch(selectGenreListId(e.target.value))} value={genreListId}>
            {genres.map((genre) => (
              <option key={genre.value} value={genre.value}>
                {genre.title || "POP"}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="songCont">
        {data?.map((song, i) => (
          <SongCard key={song.key} song={song} i={i} isPlaying={isPlaying} activeSong={activeSong} data={data} />
        ))}
      </div>
    </section>
  );
}
