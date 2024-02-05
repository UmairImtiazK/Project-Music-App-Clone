import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery} from '../redux/services/ShzamCore';
import './Css files/AroundPage.css';

const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();


  if(isFetching) return <Loader title="Loading songs from top Chart" />;

  if(error) return <Error />;

  return (
    <div className='AroundPage'>
      <h2>
        Discover Top Charts
      </h2>

      <div className='arounditems'>
        {data?.map((song, i) => (
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

export default TopCharts;
