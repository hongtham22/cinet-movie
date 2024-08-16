import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemList.css';


function ItemList({ items, title, formatDate }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, items.length);
    return items.slice(startIndex, endIndex);
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination Logic
  const getPaginationRange = () => {
    if (totalPages <= 5) {
      return [...Array(totalPages).keys()].map(number => number + 1);
    }

    const range = [];
    range.push(1);

    if (currentPage > 3) {
      range.push('...');
    }

    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      range.push(i);
    }

    if (currentPage < totalPages - 2) {
      range.push('...');
    }

    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  };

  return (
    <div className="movies-people">
      <h2>{title}</h2>
      <div className="movies-people-container">
        {getCurrentItems().map((item) => (
          <Link
            to={`/${item.media_type}/${item.id}`}
            key={item.id}
            className="item-link"
          >
            <div className="item">
              <img
                src={`${import.meta.env.VITE_IMG_URL}${item.poster_path || item.profile_path}`}
                onError={(e) => { e.target.onerror = null; e.target.src = '/public/placeholder.png'; }}
                className="img-movies-people"
              />
              <div className="movies-people-content">
                <div className="left-content">
                  <h3 className="name">{item.title || item.name}</h3>
                  <p className="point">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        color="#f5c518"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        role="presentation"
                      >
                        <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
                      </svg>
                    </span>
                    {item.known_for_department || item.vote_average.toFixed(1)}
                  </p>
                </div>
                <div className="right-content">
                  <p className="year">
                    {formatDate(item.release_date || item.first_air_date)}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >

            «
          </button>
          {getPaginationRange().map((page, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? 'active' : ''}
              disabled={page === '...'}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >

            »
          </button>
        </div>
      )}
    </div>
  );
}

ItemList.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  formatDate: PropTypes.func,
};

export default ItemList;
