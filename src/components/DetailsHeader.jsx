import { Link } from 'react-router-dom';
import './Components Css/detailsHeader.css';

const DetailsHeader = ({ artistId, artistData, songData }) => {

  const artist = artistData?.artists[artistId]?.attributes;

  return (
    <div className="detailsHeader">

      <div className='imgCont'>
        <img
          alt='art'
          src={artistId ? artist.artwork?.url.replace('{w}', '500').replace('{h}', '500')
          : songData?.images?.coverart}
          className="img"
        />

        <div style={{marginLeft: '1.5rem'}}>
          <p className='songTitle'>
            {artistId ? artist?.name : songData?.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamId}`}>
              <p className='songSubTitle'>
                {songData?.subtitle}
              </p>
            </Link>
          )}

          <p className='songSubTitle'>
            {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>  
      
    </div>
  )
};

export default DetailsHeader;
