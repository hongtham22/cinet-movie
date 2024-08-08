
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Content.css';
import { Link } from 'react-router-dom'; 


const Content = ({ title, content, data, status }) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

  return (
    <div className="content">
      <h2>{title}</h2>
      <p>{content}</p>

      <Carousel 
        responsive={responsive} 
        className="img-container"
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true} 
      >
        {data && data.length > 0 && data.map((item) =>(
          <Link to={`/${status}/${item.id}`} key={item.id} className="item-link">

        <div className="img-item">
          <img src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`} alt="popular_film" />
          <div className="content-img">
            <p>{item.title || item.original_title || item.name}</p>
          </div>
        </div>
        </Link>

        ) )}

      </Carousel>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  data: PropTypes.array,
  status: PropTypes.string
};

export default Content;