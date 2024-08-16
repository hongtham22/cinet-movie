import './Cast.css';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom'; 
import { useEffect } from 'react';

const opts = {
  height: '400',
  width: '950',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    rel: 0,
  },
};

function Cast({ cast, recommendationMovie, trailerMovie, status}) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className='cast'>
      <h2>Top Billed Cast</h2>
      <div className="wapper">
        {cast && cast.length > 0 && cast.map((item) => (
          <Link to={`/person/${item.id}`} key={item.id} className="item-link">
            <div className="item">
              <img
                src={`${import.meta.env.VITE_IMG_URL}${item.profile_path}`}
                onError={(e) => { e.target.onerror = null; e.target.src = '/public/placeholder.png'; }}
                className='img-cast'
              />
              <div className="cast-content">
                <h3 className="cast-name">{item.name}</h3>
                <h3 className="cast-role">{item.character}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <h2 className='trailer-h2'>Trailer</h2>
      <div className="trailer-container">
        <YouTube videoId={trailerMovie} opts={opts} />
      </div>

      <h2 className="recommendation">Recommendations</h2>
      <div className="wapper-recommendation">
        {recommendationMovie && recommendationMovie.length > 0 && recommendationMovie.map((item) => (
          <Link to={`/${status}/${item.id}`} key={item.id} className="item-link">
            <div className="item">
              <img
                src={`${import.meta.env.VITE_IMG_URL}${item.backdrop_path || item.poster_path}`}
                onError={(e) => { e.target.onerror = null; e.target.src = '/public/placeholder.png'; }}
                className='img-re'
              />
              <div className="re-content">
                <h3 className="re-name">{item.title || item.name}</h3>
                <h3 className="re-release">{new Date(item.release_date).getFullYear()
                                            || new Date(item.first_air_date).getFullYear()}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

Cast.propTypes = {
    cast: PropTypes.array,
    recommendationMovie: PropTypes.array,
    trailerMovie: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
};

export default Cast;
