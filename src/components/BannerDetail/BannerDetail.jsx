
import VoteInfo from '../VoteInfo/VoteInfo'
import './BannerDetail.css'
import PropTypes from 'prop-types';



function BannerDetail({movie, director}) {
    if (!movie) {
        return <div>Loading...</div>;
      }
    const backgroundImageUrl = `${import.meta.env.VITE_FULL_IMG_URL}${movie.backdrop_path}`;
    const genreNames = movie.genres.map(genre => genre.name).slice(0, 3).join(', ');

    let formattedDate = '';
    let year = '';

    if (movie.release_date) {
      const releaseDateParts = movie.release_date.split('-');
      year = releaseDateParts[0];
      formattedDate = `${releaseDateParts[2]}/${releaseDateParts[1]}/${releaseDateParts[0]}`;
    } else if (movie.first_air_date) {
      const firstAirPart = movie.first_air_date.split('-');
      year = firstAirPart[0];
      formattedDate = `${firstAirPart[2]}/${firstAirPart[1]}/${firstAirPart[0]}`;
    }
    
    // Sử dụng formattedDate trong component của bạn


    const hours = Math.floor(movie.runtime / 60);
    const minutes = movie.runtime % 60;
    const formattedRuntime = `${hours}h${minutes}m`;

  return (
    <div className="banner-detail" style={{ '--background-image': `url(${backgroundImageUrl})` }}>
        <div className="left-img">
            <img src={`${import.meta.env.VITE_IMG_URL}${movie.poster_path}`} alt="imgDetail" />
        </div>
        <div className="right-content">
            <h1 className="name">{movie.title || movie.name}<span className="publish-year"> ({year})</span></h1>
            <ul className="list-info-detail">
                <li className="publish-date">{formattedDate} <span className="short-origin">({movie.origin_country[0]})</span></li>
                <li className="genre">{genreNames}</li>
                {movie.runtime &&(
                <li className="time">{formattedRuntime}</li>
                )}

            </ul>
            {/* <div className="vote-info">
                <div className="point-vote">
                    <div className="circle">
                        <div className="chart">

                        <h3 className="point-number">8.5</h3>
                        </div>
                    </div>
                </div>
                <h2 className="count-vote">Vote count: 500</h2>
            </div> */}
            <div className="vote-info">
                {/* <div className="point-vote">
                    <div className="circle">
                        <div className="chart">
                            <canvas id="voteCanvas" width="68" height="68"></canvas>
                            <h3 className="point-number">8.5</h3>
                        </div>
                    </div>
                </div> */}
                 <VoteInfo point = {movie.vote_average.toFixed(1)}></VoteInfo>
                <h2 className="count-vote">Vote count: <span className='num-count'>{movie.vote_count}</span></h2>
                
            </div>
            <h2 className="overview">Overview</h2>
            <p className="overview-content">{movie.overview}</p>

            {director && (
            <div className="director-info">
                    <>
                    <h3 className="director-name">{director}</h3>
                    <p className="role">Director</p>
                    </>
            </div>
            )}

        </div>

    </div>
  )
}

BannerDetail.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        poster_path: PropTypes.string,
        backdrop_path: PropTypes.string,
        overview: PropTypes.string,
        release_date: PropTypes.string,
        origin_country: PropTypes.array,
        genres: PropTypes.array,
        runtime: PropTypes.number,
        vote_average: PropTypes.number,
        vote_count: PropTypes.number,
        first_air_date: PropTypes.string,
        name: PropTypes.string,
    }),
    director: PropTypes.string
  }
  

export default BannerDetail