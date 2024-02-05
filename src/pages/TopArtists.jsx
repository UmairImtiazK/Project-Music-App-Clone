import { ArtistCard, Error, Loader } from '../components';
import { useGetTopChartsQuery} from '../redux/services/ShzamCore';
import './Css files/AroundPage.css';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();


  if(isFetching) return <Loader title="Loading songs from top Chart" />;

  if(error) return <Error />;

  return (
    <div className='AroundPage'>
      <h2>
        Discover Top Artists
      </h2>

      <div className='arounditems'>
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track}/>
        ))}
      </div>
    </div>
  )
}

export default TopArtists;
