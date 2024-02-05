import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/ShzamCore';
import './Css files/AroundPage.css';

const AroundYou = () => {

  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  useEffect(() => {
    setCountry("HR");
  }, [country]);

  if(isFetching && loading) return <Loader title="Loading songs around you" />;

  if(error) return <Error />;

  return (
    <div className='AroundPage'>
      <h2>
        Around You <span>{country}</span>
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

export default AroundYou;
