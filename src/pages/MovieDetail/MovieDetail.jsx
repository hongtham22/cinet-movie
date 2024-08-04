import BannerDetail from '../../components/BannerDetail/BannerDetail'
import Cast from '../../components/Cast/Cast'
import DetailInfo from '../../components/DetailInfo/DetailInfo'
import './MovieDetail.css'

function MovieDetail() {
  return (
    <div className='movie-detail'>
        <BannerDetail></BannerDetail>
        <div className="main-container">
          <Cast></Cast>
          <DetailInfo></DetailInfo>

        </div>
    </div>
  )
}

export default MovieDetail