import SongBar from "./SongBar";
export default function RelatedSongs({
  isPlaying,
  data,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId
}) {
  return (
    <div>
      <h1 style={{ fontWeight: "600", fontSize: "1.8rem" }}>Related Songs</h1>
      {data?.map((song, i) => (
        <SongBar
          key={`${song.key}-${artistId}`}
          song={song}
          i={i}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
          artistId={artistId}
        />
      ))}
    </div>
  );
}
