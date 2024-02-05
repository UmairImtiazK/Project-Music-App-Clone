import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Error, Loader, SongCard } from '../components';
import { useGetSongsBySearchQuery} from '../redux/services/ShzamCore';
import './Css files/AroundPage.css';

const Search = () => {
  const {searchTerm} = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  const songs = data?.tracks?.hits?.map((song) => song.track);

  if(isFetching) return <Loader title="Loading songs from Search" />;

  if(error) return <Error />;

  return (
    <div className='AroundPage'>
      <h2>
        Discover Search Charts
      </h2>

      <div className='arounditems'>
        {songs?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  )
}

export default Search;
