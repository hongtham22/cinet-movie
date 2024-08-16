import './ContentHeader.css'
import PropTypes from 'prop-types'; 
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';



function ContentHeader({title, category, data}) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className='content-header'>
         <div className="container-header">
        <h2 className="title">{title} <span>{category}</span></h2>
        <div className="grid-header">
          {data &&
            data.map((item) => (
          <Link to={`/${category}/${item.id}`} key={item.id} className="item-link">

              <div className="grid-item">
                  <img
                    src={`${import.meta.env.VITE_IMG_URL}${item.poster_path || item.profile_path}`}
                    alt={item.title}
                    className="grid-img"
                  />
                  <div className="grid-content">
                    <h3 className="grid-name">{item.title || item.name}</h3>
                    <h3 className="grid-release">{new Date(item.release_date).getFullYear()
                      || new Date(item.first_air_date).getFullYear() || item.known_for_department}</h3>
                  </div>
                
              </div>
          </Link>

            ))}
        </div>
      </div>

    </div>
  )
}

ContentHeader.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    category:PropTypes.string,
  };

export default ContentHeader