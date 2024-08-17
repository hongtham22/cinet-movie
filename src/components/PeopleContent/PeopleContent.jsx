import './PeopleContent.css'
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom'; 
import { useEffect } from 'react';
import ItemList from '../ItemList/ItemList';



function PeopleContent({people, credit}) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!people) {
    return <div>Loading...</div>;
  }

  const knownFor = credit
  .filter(item => item.order !== undefined && item.poster_path !== null)
  .sort((a, b) => a.order - b.order)
  .slice(0, 15);

const movies = credit
  .filter(item => item.media_type === 'movie'&& item.poster_path !== null)
  .sort((a, b) => new Date(b.release_date) - new Date(a.release_date));


const tvShows = credit
  .filter(item => item.media_type === 'tv' && item.poster_path !== null)
  .sort((a, b) => new Date(b.first_air_date) - new Date(a.first_air_date));


const formatDate = (dateString) => {
  if (!dateString) return '';
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
};

  return (
    <div className="people-content">
      <h1 className='name'>{people.name}</h1>
      
      <div className="biography">
        <h2>Biography</h2>
        <p>{people.biography}</p>
        
      </div>

      <div className="know-for-container">
        <h2>Know For</h2>
        <div className="known-for">
          {knownFor.map(item => (
            <Link to={`/${item.media_type}/${item.id}`} key={item.id} className="item-link">
              <div  className="item">
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                  alt="img-know-for"
                  className='img-cast'
                />
                <div className="cast-content">
                  <h3 className="cast-movie-name">{item.title || item.name}</h3>

                </div>

              </div>
            </Link>
          ))}


        </div>

      </div>

      {movies && movies.length > 0 &&(
        <ItemList items={movies} title="Movies" formatDate={formatDate} />
      )}

      {tvShows && tvShows.length > 0 &&(
        <ItemList items={tvShows} title="TV Series" formatDate={formatDate} />  
      )}

    </div>
  )
}

PeopleContent.propTypes = {
  people: PropTypes.shape({
    name: PropTypes.string,
    biography: PropTypes.string,
  }),
  credit: PropTypes.array,
}

export default PeopleContent