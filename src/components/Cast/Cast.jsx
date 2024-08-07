import './Cast.css';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 

const opts = {
  height: '400',
  width: '956',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

function Cast({ cast, recommendationMovie }) {
  return (
    <div className='cast'>
      <h2>Top Billed Cast</h2>
      <div className="wapper">
        {cast && cast.length > 0 && cast.map((item) => (
          <div key={item.id} className="item">
            <img
              src={`${import.meta.env.VITE_IMG_URL}${item.profile_path}`}
              alt="imgCast"
              className='img-cast'
            />
            <div className="cast-content">
              <h3 className="cast-name">{item.name}</h3>
              <h3 className="cast-role">{item.character}</h3>
            </div>
          </div>
        ))}
      </div>

      <h2 className='trailer-h2'>Trailer</h2>
      <div className="trailer-container">
        <YouTube videoId="t60KAlbEhvE" opts={opts} />
      </div>

      <h2 className="recommendation">Recommendations</h2>
      <div className="wapper-recommendation">
        {recommendationMovie && recommendationMovie.length > 0 && recommendationMovie.map((item) => (
          <Link to={`/movie/${item.id}`} key={item.id} className="item-link">
            <div className="item">
              <img
                src={`${import.meta.env.VITE_IMG_URL}${item.backdrop_path || item.poster_path}`}
                alt="imgRe"
                className='img-re'
              />
              <div className="re-content">
                <h3 className="re-name">{item.title}</h3>
                <h3 className="re-release">{new Date(item.release_date).getFullYear()}</h3>
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
};

export default Cast;