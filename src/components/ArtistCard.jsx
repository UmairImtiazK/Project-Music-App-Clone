import { useNavigate } from "react-router-dom";
import './Components Css/ArtistCard.css';

export default function ArtistCard({track}) {
  const navigate = useNavigate();

  return (
    <div className="artistCard" onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}>
      <img src={track?.images?.coverart} alt="" />
      <p>{track?.subtitle}</p>
    </div>
  )
}
