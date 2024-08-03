import './People.css';
import PropTypes from 'prop-types';


function People({data}) {
  return (
    <div className="people-container">
        <div className="people-content">
            <div className="left">
            {data && data.length > 0 && data.map((item) =>(
                <div
                key={item.id}
                
                className="img-item">
                        <img src={`${import.meta.env.VITE_IMG_URL}${item.profile_path}`} alt="Spirited Away" />
                        <div className="content-img">
                            <h3 className='name-people'>{item.name}</h3>
                        </div>
                </div>
        
                
            ) )}

            </div>

            <div className="right">
                <h1>Trending People</h1>
                <p>Explore the trending stars in the movie industry on Cinet. Stay informed about your favorite actors, directors, and filmmakers who are making waves in the world of cinema. Discover who&apos;s topping the charts and making headlines today.</p>


                <button className="btn btn-people">
                VIEW MORE
                </button>
            </div>
        </div>


    </div>

  )
}

People.propTypes = {
    data: PropTypes.array,
  };
  

export default People