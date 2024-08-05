import './Cast.css'
import imgRe from '../../assets/img/img-re.jpg'
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';



const opts = {
  height: '400',
  width: '956',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

function Cast({cast}) {
  return (
    <div className='cast'>

        <h2>Top Billed Cast</h2>

        <div className="wapper">
          {cast && cast.length > 0 && cast.map((item) =>(
            <div
            key={item.id}
             className="item">
              <img src={`${import.meta.env.VITE_IMG_URL}${item.profile_path}`} alt="imgCast" className='img-cast'/>
              <div className="cast-content">
                <h3 className="cast-name">Rumi Hiiragi</h3>
                <h3 className="cast-role">Chihiro Ogino / Sen (voice)</h3>
              </div>
            </div>

           
        ) )}

        </div>

        <h2 className='trailer-h2'>Trailer</h2>

        <div className="trailer-container">
        {/* <YouTube videoId="ByXuk9QqQkk" opts={opts} />; */}
        <YouTube videoId="t60KAlbEhvE" opts={opts} />
        

        </div>

        <h2 className="recommendation">Recommendations</h2>
        <div className="wapper-recommendation">
            <div className="item">
              <img src={imgRe} alt="imgRe" className='img-re'/>
              <div className="re-content">
                <h3 className="re-name">Rumi Hiiragi</h3>
                <h3 className="re-release">2024</h3>
              </div>
            </div>

            <div className="item">
              <img src={imgRe} alt="imgRe" className='img-re'/>
              <div className="re-content">
                <h3 className="re-name">Rumi Hiiragi</h3>
                <h3 className="re-release">2024</h3>
              </div>
            </div>

            <div className="item">
              <img src={imgRe} alt="imgRe" className='img-re'/>
              <div className="re-content">
                <h3 className="re-name">Rumi Hiiragi</h3>
                <h3 className="re-release">2024</h3>
              </div>
            </div>

            <div className="item">
              <img src={imgRe} alt="imgRe" className='img-re'/>
              <div className="re-content">
                <h3 className="re-name">Rumi Hiiragi</h3>
                <h3 className="re-release">2024</h3>
              </div>
            </div>

            <div className="item">
              <img src={imgRe} alt="imgRe" className='img-re'/>
              <div className="re-content">
                <h3 className="re-name">Rumi Hiiragi</h3>
                <h3 className="re-release">2024</h3>
              </div>
            </div>

        </div>

    </div>
  )
}

Cast.propTypes = {
  cast: PropTypes.array,
};

export default Cast