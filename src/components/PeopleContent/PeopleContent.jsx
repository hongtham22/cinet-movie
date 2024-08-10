import './PeopleContent.css'
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom'; 
import { useEffect } from 'react';



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
                  {/* <p className="year-movie">{item.media_type}</p> */}

                </div>

              </div>
            </Link>
          ))}


            {/* <div className="item">
              <img
                src={imgCast}
                alt="imgCast"
                className='img-cast'
              />
              <div className="cast-content">
                <h3 className="cast-movie-name">Euphoriaaaaa hihiiiiii</h3>
                <p className="year-movie">2024</p>
              </div>
            </div> */}

        </div>

      </div>

      <div className="movies-people">
        <h2>Movies</h2>
        <div className="movies-people-container">
        {movies.map(item => (
        
        <Link to={`/${item.media_type}/${item.id}`} key={item.id} className="item-link">
          <div className="item">
            <img src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`} alt="img-movies-people" className="img-movies-people" />
            <div className="movies-people-content">
              <div className="left-content">

                <h3 className="name">{item.title}</h3>
                <p className='point'><span>
                  <svg width="16" height="16" color='#f5c518' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
                  </span>{item.vote_average.toFixed(1)}</p>
              </div>
              <div className="right-content">
                <p className="year">{formatDate(item.release_date)}</p>
              </div>
            </div>
          </div>
        </Link>
          ))}


          {/* <div className="item">
            <img src={imgCast} alt="" className="img-movies-people" />
            <div className="movies-people-content">
              <div className="left-content">

                <h3 className="name">Name Movies</h3>
                <p className='point'><span>
                  <svg width="16" height="16" color='#f5c518' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
                  </span>8.9</p>
              </div>
              <div className="right-content">
                <p className="year">2024</p>
              </div>
            </div>
          </div> */}


        </div>

      </div>

      <div className="movies-people">
        <h2>TV Series</h2>
        <div className="movies-people-container">
        {tvShows.map(item => (
           <Link to={`/${item.media_type}/${item.id}`} key={item.id} className="item-link">

          <div className="item">
            <img src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`} alt="" className="img-movies-people" />
            <div className="movies-people-content">
              <div className="left-content">

                <h3 className="name">{item.name}</h3>
                <p className='point'><span>
                  <svg width="16" height="16" color='#f5c518' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
                  </span>{item.vote_average.toFixed(1)}</p>
              </div>
              <div className="right-content">
                <p className="year">{formatDate(item.first_air_date)}</p>
              </div>
            </div>
          </div>
           </Link>


          ))}

        {/* <div className="item">
          <img src={imgCast} alt="" className="img-movies-people" />
          <div className="movies-people-content">
            <div className="left-content">

              <h3 className="name">Name Movies</h3>
              <p className='point'><span>
                <svg width="16" height="16" color='#f5c518' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
                </span>8.9</p>
            </div>
            <div className="right-content">
              <p className="year">2024</p>
            </div>
          </div>
        </div> */}
        </div>

      </div>
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