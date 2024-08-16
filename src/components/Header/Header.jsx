import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logoDefault from '../../assets/img/logo-default-220x68.png';
import './Header.css';

function Header() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate(); 

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const searchLink = getSearchLink();
      if (searchLink !== '#') {
        navigate(searchLink); 
      }
    }
  };

  const getSearchLink = () => {
    if (searchValue.trim() === '') {
      return '#'; // Return '#' if search value is empty
    }
    return `/search?query=${encodeURIComponent(searchValue.trim())}`;
  };

  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="header">
      <Link to={`/`} >
        <img src={logoDefault} alt="logoDefault" className='logo' />
      </Link>
      <div className="right-header">
        <Link to="/" className="item-link">
          <h3 className={path === '/' ? 'active' : ''}>Home</h3>
        </Link>
        <div className="item-header">
          <h3 className={path.includes('movie') ? 'active' : ''}>Movies
            <ul className="sub-header">
              <li className="item-sub-header"><Link to="/movie/type/now-playing" className="item-link">Now Playing</Link></li>
              <li className="item-sub-header"><Link to="/movie/type/popular" className="item-link">Popular</Link></li>
              <li className="item-sub-header"><Link to="/movie/type/upcoming" className="item-link">Upcoming</Link></li>
              <li className="item-sub-header"><Link to="/movie/type/top-rated" className="item-link">Top Rated</Link></li>
            </ul>
          </h3>
          
          <h3 className={path.includes('tv') ? 'active' : ''}>TV Series
            <ul className="sub-header">
              <li className="item-sub-header"><Link to="/tv/type/airing-today" className="item-link">Airing Today</Link></li>
              <li className="item-sub-header"><Link to="/tv/type/popular" className="item-link">Popular</Link></li>
              <li className="item-sub-header"><Link to="/tv/type/on-the-air" className="item-link">On The Air</Link></li>
              <li className="item-sub-header"><Link to="/tv/type/top-rated" className="item-link">Top Rated</Link></li>
            </ul>
          </h3>
          
          <h3 className={path.includes('person') ? 'active' : ''}>People
            <ul className="sub-header">
              <li className="item-sub-header"><Link to="/person/type/popular" className="item-link">Popular</Link></li>
            </ul>
          </h3>
        </div>

        <div className='search'>
          <input
            type="text"
            placeholder="Search..."
            className="ip-search"
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress} 
          />
          <Link to={getSearchLink()}>
            <button className="btn-search">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" className="search-icon">
                <rect x="-225" y="-225" width="2700" height="2700" fill="rgb(100%, 100%, 100%)" fillOpacity="1"/>
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zm-5.442 1.398a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
