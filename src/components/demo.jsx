import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { useGetTopChartsQuery } from "../redux/services/ShzamCore";
import "./Components Css/topChart.css";

const TopChartCard = ({ song, i }) => <div className="card">{song?.title}</div>;

export default function TopCharts() {
  const { data } = useGetTopChartsQuery();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const divRef = useRef(null);
  const topPlays = data?.slice(0, 5);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return (
    <div ref={divRef} className="TopChart">
      <div className="topChartChild">
        <div className="topChartSuperChild">
          <h1>Top Charts</h1>
          <Link>
            <p>SeeMore</p>
          </Link>
        </div>
        <div className="topChartCard">
          {topPlays?.map((song, i) => (
            <TopChartCard key={song.key} song={song} i={i} />
          ))}
        </div>
      </div>

      <div className="topArtist">
      <div className="topChild">
          <h1>Top Artists</h1>
          <Link>
            <p>SeeMore</p>
          </Link>
        </div>
        

        <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
        >
          <div className="artistRow">
          {topPlays?.slice(0, 4).map((artist) => (
            <SwiperSlide
            key={artist?.key}
            style={{ width: '15%', height: '10' }}
            
            >
              <Link to={`/artists/${artist?.artists[0].adamid}`}>
                <img src={artist?.images?.background} alt="Name" className="artistImg" />
              </Link>
            </SwiperSlide>
          ))}
          </div>
        </Swiper>
          
      </div>
    </div>
  );
}
