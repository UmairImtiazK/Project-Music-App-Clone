import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useGetArtistDetailsQuery } from "../redux/services/ShzamCore";
import "./Css files/songDetails.css";

export default function ArtistDetails() {
  const { id: artistId } = useParams();

  const { data: artistData, isFetching: isFetchingArtistDetails, error, } = useGetArtistDetailsQuery(artistId);

  console.log(artistData);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  if (isFetchingArtistDetails)
    return <Loader title="Artist details is loading..." />;

  if (error) return <Error />;

  return (
    <div className="songDetails">
      <DetailsHeader artistId={artistId} artistData={artistData} />
      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
}
