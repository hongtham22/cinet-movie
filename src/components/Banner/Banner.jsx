
import './Banner.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button className="custom-arrow custom-left-arrow" onClick={onClick}>
      &#9664;
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button className="custom-arrow custom-right-arrow" onClick={onClick}>
      &#9654;
    </button>
  );
};



{/* <Carousel responsive={responsive}></Carousel>; */}


const Banner = ({data}) => {
  return (
    <div className="banner">
      <Carousel 
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={8000}
        infinite={true} 
      >
      {/* <Carousel
      responsive={responsive}
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />} */}
    {/* > */}
      {data && data.length > 0 && data.map((item) =>(
        <div
          key={item.id}
         className="container">

          <div className="left">
              <ul className="list-info animated">
                <li className="nation">{item.original_language}</li>
                <li className="date">{item.release_date}</li>
                <li className="rate">TMDB: {item.vote_average.toFixed(1)}/10</li>

              </ul>
              <h1 className='animated'>{item.title || item.original_title}</h1>

              <p className='animated'> {item.overview}
                {/* A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force. */}
              </p>

              <button className="btn btn-view">
                  <svg width="25px" height="25px" className="view-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"/></svg>
            WATCH NOW
              </button>


          </div>
          <div className="right">
              <div className="img-banner-container">
                  <img src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`} alt="imgBanner1" className='img-banner'/>
                  <div className="img-banner-title">
                      <span>UPCOMING</span>
                  </div>
              </div>
          </div>
      </div>
      ) )}
        
        {/* <div className="container">

          <div className="left">
              <ul className="list-info animated">
                <li className="nation">USA</li>
                <li className="date">SEP 30, 2021</li>
                <li className="rate">IMDB: 5,3/10</li>

              </ul>
              <h1 className='animated'>The Nun</h1>

              <p className='animated'>A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force.
              </p>

              <button className="btn btn-view">
                  <svg width="25px" height="25px" className="view-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"/></svg>
            WATCH NOW
              </button>


          </div>
          <div className="right">
              <div className="img-banner-container">
                  <img src={imgBanner1} alt="imgBanner1" className='img-banner'/>
                  <div className="img-banner-title">
                      <span>HOROR</span>
                  </div>
              </div>
          </div>
        </div> */}

      </Carousel>;

        

    </div>
  )
}

CustomLeftArrow.propTypes = {
  onClick: PropTypes.func,
};
CustomRightArrow.propTypes = {
  onClick: PropTypes.func,
};

Banner.propTypes = {
  data: PropTypes.array
}

export default Banner