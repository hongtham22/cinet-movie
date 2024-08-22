import { useLocation, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logoDefault from "../../assets/img/logo-default-220x68.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const searchLink = getSearchLink();
      if (searchLink !== "#") {
        navigate(searchLink);
      }
    }
  };

  const getSearchLink = () => {
    if (searchValue.trim() === "") {
      return "#"; // Return '#' if search value is empty
    }
    return `/search?query=${encodeURIComponent(searchValue.trim())}`;
  };

  const location = useLocation();
  const path = location.pathname;

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="header">
      <div className="left-header">
        <div className="navbar">
          <button className="menu" aria-label="menu" onClick={toggleNav}>
            <svg
              width="34px"
              height="34px"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="white" />
              <path
                d="M6 12H18"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 15.5H18"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 8.5H18"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <Link to={`/`}>
          <img src={logoDefault} alt="logoDefault" className="logo" />
        </Link>
      </div>

      <div className="right-header">
        <Link to="/" className="item-link">
          <h3 className={path === "/" ? "active" : ""}>Home</h3>
        </Link>
        <div className="item-header">
          <h3 className={path.includes("movie") ? "active" : ""}>
            Movies <FontAwesomeIcon icon={faChevronDown} className="arrow" />
            <ul className="sub-header">
              <li className="item-sub-header">
                <Link to="/movie/type/now-playing" className="item-link">
                  Now Playing
                </Link>
              </li>
              <li className="item-sub-header">
                <Link to="/movie/type/popular" className="item-link">
                  Popular
                </Link>
              </li>
              <li className="item-sub-header">
                <Link to="/movie/type/upcoming" className="item-link">
                  Upcoming
                </Link>
              </li>
              <li className="item-sub-header">
                <Link to="/movie/type/top-rated" className="item-link">
                  Top Rated
                </Link>
              </li>
            </ul>
          </h3>

          <h3 className={path.includes("tv") ? "active" : ""}>
            TV Series <FontAwesomeIcon icon={faChevronDown} className="arrow" />
            <ul className="sub-header">
              <li className="item-sub-header">
                <Link to="/tv/type/airing-today" className="item-link">
                  Airing Today
                </Link>
              </li>
              <li className="item-sub-header">
                <Link to="/tv/type/popular" className="item-link">
                  Popular
                </Link>
              </li>
              <li className="item-sub-header">
                <Link to="/tv/type/on-the-air" className="item-link">
                  On The Air
                </Link>
              </li>
              <li className="item-sub-header">
                <Link to="/tv/type/top-rated" className="item-link">
                  Top Rated
                </Link>
              </li>
            </ul>
          </h3>

          <h3 className={path.includes("person") ? "active" : ""}>
            People <FontAwesomeIcon icon={faChevronDown} className="arrow" />
            <ul className="sub-header">
              <li className="item-sub-header">
                <Link to="/person/type/popular" className="item-link">
                  Popular
                </Link>
              </li>
            </ul>
          </h3>
        </div>

        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            className="ip-search"
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <Link to={getSearchLink()}>
            <button className="btn-search" aria-label="Tìm kiếm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 16 16"
                className="search-icon"
              >
                <rect
                  x="-225"
                  y="-225"
                  width="2700"
                  height="2700"
                  fill="rgb(100%, 100%, 100%)"
                  fillOpacity="1"
                />
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zm-5.442 1.398a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {isNavVisible && (
        <nav className="vertical-nav">
          <div className="item-header">
            <h3
              className={`${openSection === "movie" ? "active" : ""}`}
              onClick={() => toggleSection("movie")}
            >
              Movies{" "}
              <FontAwesomeIcon
                icon={openSection === "movie" ? faChevronUp : faChevronDown}
                className="arrow"
              />
            </h3>
            {openSection === "movie" && (
              <ul>
                <li className="item-sub-header">
                  <Link to="/movie/type/now-playing" className="item-link">
                    Now Playing
                  </Link>
                </li>
                <li className="item-sub-header">
                  <Link to="/movie/type/popular" className="item-link">
                    Popular
                  </Link>
                </li>
                <li className="item-sub-header">
                  <Link to="/movie/type/upcoming" className="item-link">
                    Upcoming
                  </Link>
                </li>
                <li className="item-sub-header">
                  <Link to="/movie/type/top-rated" className="item-link">
                    Top Rated
                  </Link>
                </li>
              </ul>
            )}

            <h3
              className={`${openSection === "tv" ? "active" : ""}`}
              onClick={() => toggleSection("tv")}
            >
              TV Series{" "}
              <FontAwesomeIcon
                icon={openSection === "tv" ? faChevronUp : faChevronDown}
                className="arrow"
              />
            </h3>
            {openSection === "tv" && (
              <ul>
                <li className="item-sub-header">
                  <Link to="/tv/type/airing-today" className="item-link">
                    Airing Today
                  </Link>
                </li>
                <li className="item-sub-header">
                  <Link to="/tv/type/popular" className="item-link">
                    Popular
                  </Link>
                </li>
                <li className="item-sub-header">
                  <Link to="/tv/type/on-the-air" className="item-link">
                    On The Air
                  </Link>
                </li>
                <li className="item-sub-header">
                  <Link to="/tv/type/top-rated" className="item-link">
                    Top Rated
                  </Link>
                </li>
              </ul>
            )}
            <h3
              className={`${openSection === "person" ? "active" : ""}`}
              onClick={() => toggleSection("person")}
            >
              People{" "}
              <FontAwesomeIcon
                icon={openSection === "person" ? faChevronUp : faChevronDown}
                className="arrow"
              />
            </h3>
            {openSection === "person" && (
              <ul>
                <li className="item-sub-header">
                  <Link to="/person/type/popular" className="item-link">
                    Popular
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      )}
    </div>
  );
}

export default Header;
