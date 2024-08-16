
import ItemList from '../../components/ItemList/ItemList';
import './SearchPage.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SearchPage() {
  const [searchResult, setSearchResult] = useState([]);
  // const [searchValue, setSearchValue] = useState(''); 
  const [selectedMediaType, setSelectedMediaType] = useState('movie'); 

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query') || ''; 

  useEffect(() => {
    const handleSearch = async () => {
      setSearchResult([]);
      try {
        const url = `https://api.themoviedb.org/3/search/${selectedMediaType}?query=${query}&include_adult=false&language=en-US&page=1`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
          }
        };

        const search = await fetch(url, options);
        const data = await search.json();

        // Add media_type to each item if it's not already present
        const resultsWithMediaType = data.results.map(item => ({
          ...item,
          media_type: selectedMediaType, // Set media_type based on the selected tab
        }));

        setSearchResult(resultsWithMediaType);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    handleSearch();
  }, [query, selectedMediaType]);

  const handleMediaTypeChange = (mediaType) => {
    setSelectedMediaType(mediaType);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className='search-page'>
      {/* Nav search */}
      <div className="nav-search">
        <h2>Search Results</h2>
        <ul className="list-nav">
          <li className={selectedMediaType === 'movie' ? 'active' : ''}>
            <button onClick={() => handleMediaTypeChange('movie')} className="search-tab">
              Movies
            </button>
            {/* <span className='count-item'>10,000</span> */}
          </li>
          <li className={selectedMediaType === 'tv' ? 'active' : ''}>
            <button onClick={() => handleMediaTypeChange('tv')} className="search-tab">
              TV Series
            </button>
            {/* <span className='count-item'>10,000</span> */}
          </li>
          <li className={selectedMediaType === 'person' ? 'active' : ''}>
            <button onClick={() => handleMediaTypeChange('person')} className="search-tab">
              People
            </button>
            {/* <span className='count-item'>10,000</span> */}
          </li>
        </ul>
      </div>

      {/* list-search */}
      <div className="center-search">
        <ItemList items={searchResult} title="" formatDate={formatDate} />
      </div>
    </div>
  );
}

export default SearchPage;

