import { useEffect, useState } from 'react';
import './HeaderItem.css';
import ContentHeader from '../../components/ContentHeader/ContentHeader';
import { useParams } from 'react-router-dom';

function HeaderItem() {
  const { category, title } = useParams();
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 

  useEffect(() => {
    const fetchItems = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      let url;
      switch (category) {
        case 'movie':
          switch (title) {
            case 'now-playing':
              url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${currentPage}`;
              break;
            case 'popular':
              url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}`;
              break;
            case 'upcoming':
              url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${currentPage}`;
              break;
            case 'top-rated':
              url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${currentPage}`;
              break;
            default:
              return;
          }
          break;
        case 'tv':
          switch (title) {
            case 'airing-today':
              url = `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${currentPage}`;
              break;
            case 'popular':
              url = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${currentPage}`;
              break;
            case 'on-the-air':
              url = `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=${currentPage}`;
              break;
            case 'top-rated':
              url = `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${currentPage}`;
              break;
            default:
              return;
          }
          break;
        case 'person':
          switch (title) {
            case 'popular':
              url = `https://api.themoviedb.org/3/person/popular?language=en-US&page=${currentPage}`;
              break;
            default:
              return;
          }
          break;
        default:
          return;
      }

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setItems(data.results);
        // console.log('ItemHeader', data.results);
      } catch (error) {
        console.error(`Error fetching ${category} ${title} data:`, error);
      }
    };

    fetchItems();
  }, [category, title, currentPage]);

  useEffect(() => {
    // Reset currentPage to 1 when category or title changes
    setCurrentPage(1);
  }, [category, title]);

  const formattedTitle = title
    .replace('-', ' ') 
    .toUpperCase(); 

  const totalPages = 5;

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='header-item'>
      <ContentHeader 
        title={`${formattedTitle}`}
        category={`${category.toUpperCase()}`}
        data={items}
      />
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            {/* Previous */}
            «
          </button>
          {[...Array(totalPages).keys()].map((number) => (
            <button
              key={number + 1}
              onClick={() => handlePageChange(number + 1)}
              className={currentPage === number + 1 ? 'active' : ''}
            >
              {number + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            {/* Next */}
            »
          </button>
        </div>
      )}
    </div>
  );
}

export default HeaderItem;
