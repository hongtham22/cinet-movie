import './DetailInfo.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 



function DetailInfo({movie}) {
  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <div className='detail-info'> 
      
        <div className="home-page">
          <Link to={movie.homepage} target='_blank'>
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 22C7.286 22 4.929 22 3.464 20.536 2 19.071 2 16.714 2 12 2 7.286 2 4.929 3.464 3.464 4.929 2 7.286 2 12 2c4.714 0 7.071 0 8.536 1.464C22 4.929 22 7.286 22 12c0 4.714 0 7.071-1.464 8.536C19.071 22 16.714 22 12 22ZM9.198 7.25h.104c.899 0 1.648 0 2.243.08.628.085 1.195.271 1.65.726.456.456.642 1.023.726 1.651.08.595.08 1.344.08 2.243v.052c0 .414-.336.75-.75.75s-.75-.336-.75-.75c0-.964-.002-1.611-.067-2.094-.062-.462-.169-.659-.299-.789-.13-.13-.327-.237-.789-.299-.483-.065-1.131-.067-2.095-.067-.964 0-1.611.002-2.094.067-.462.062-.659.169-.789.299-.13.13-.237.327-.299.789-.065.483-.067 1.131-.067 2.095 0 .964.002 1.611.067 2.094.062.462.169.659.299.789.13.13.327.237.789.299.483.065 1.131.067 2.095.067.414 0 .75.336.75.75s-.336.75-.75.75h-.052c-.899 0-1.648 0-2.243-.08-.628-.085-1.195-.271-1.65-.726-.456-.456-.642-1.023-.726-1.651-.08-.595-.08-1.344-.08-2.243v-.052c0-.899 0-1.648.08-2.243.085-.628.271-1.195.726-1.65.456-.456 1.023-.642 1.651-.726.595-.08 1.344-.08 2.243-.08ZM16.845 8.817c-.483-.065-1.131-.067-2.095-.067-.414 0-.75-.336-.75-.75s.336-.75.75-.75h.052c.899 0 1.648 0 2.243.08.628.085 1.195.271 1.65.726.456.456.642 1.023.726 1.651.08.595.08 1.344.08 2.243v.104c0 .899 0 1.648-.08 2.243-.085.628-.271 1.195-.726 1.65-.456.456-1.023.642-1.651.726-.595.08-1.344.08-2.243.08h-.104c-.899 0-1.648 0-2.243-.08-.628-.085-1.195-.271-1.65-.726-.456-.456-.642-1.023-.726-1.651-.08-.595-.08-1.344-.08-2.243v-.052c0-.414.336-.75.75-.75s.75.336.75.75c0 .964.002 1.611.067 2.094.062.462.169.659.299.789.13.13.327.237.789.299.483.065 1.131.067 2.095.067.964 0 1.611-.002 2.094-.067.462-.062.659-.169.789-.299.13-.13.237-.327.299-.789.065-.483.067-1.131.067-2.095 0-.964-.002-1.611-.067-2.094-.062-.462-.169-.659-.299-.789-.13-.13-.327-.237-.789-.299Z" fill="#1C274C"/>
        </svg>
            Homepage</Link>

        </div>


        <div className="original-tittle">
            <h3>Original Tittle</h3>
            <p>{movie.original_title}</p>
        </div>

        <div className="status">
          <h3>Status</h3>
          <p>{movie.status}</p>
        </div>


        {movie.spoken_languages && movie.spoken_languages[0]?.english_name && (
        <div className="original-language">
          <h3>Original Language</h3>
          <p>{movie.spoken_languages[0].english_name}</p>
        </div>
      )}

      {movie.production_companies && movie.production_companies[0]?.name && (
        <div className="product-company">
          <h3>Product Company</h3>
          <p>{movie.production_companies[0].name}</p>
        </div>
      )}

      {movie.popularity != null && (
        <div className="popularity">
          <h3>Popularity</h3>
          <p>{movie.popularity}</p>
        </div>
      )}

      {movie.budget != null && (
        <div className="budget">
          <h3>Budget</h3>
          <p>${movie.budget.toLocaleString()}</p>
        </div>
      )}

      {movie.revenue != null && (
        <div className="revenue">
          <h3>Revenue</h3>
          <p>${movie.revenue.toLocaleString()}</p>
        </div>
      )}


    </div>
  )
}

DetailInfo.propTypes = {
  movie: PropTypes.shape({
    homepage: PropTypes.string,
    original_title: PropTypes.string,
    status: PropTypes.string,
    spoken_languages: PropTypes.array,
    production_companies: PropTypes.array,
    popularity: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number,

  }),
  director: PropTypes.string
}


export default DetailInfo