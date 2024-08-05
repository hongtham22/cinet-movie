import { useParams } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import BannerDetail from '../../components/BannerDetail/BannerDetail'
import Cast from '../../components/Cast/Cast'
import DetailInfo from '../../components/DetailInfo/DetailInfo'
import './MovieDetail.css'

function MovieDetail() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {

      try {
        const urlMovieDetail = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
        const urlCast = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;

        // const url = 'https://api.themoviedb.org/3/movie/129/credits?language=en-US';
   
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
          }
        };
        const responseMovie = await fetch(urlMovieDetail, options);
        const dataMovieDetail = await responseMovie.json();

        setMovieDetails(dataMovieDetail);

        console.log(dataMovieDetail);



        const [responeCast,

        ] = await Promise.all([
          fetch(urlCast, options),

        ]) ;
        const dataCast = await responeCast.json();

        setCast(dataCast.cast || []);
        console.log(dataCast);
      } catch (error) {
        console.log(error);
      }


    };

    fetchMovieData();

  }, [id]);


  return (
    <div className='movie-detail'>
        <BannerDetail movie={movieDetails}></BannerDetail>
        <div className="main-container">
          <Cast cast={cast.slice(0,9)}></Cast>
          <DetailInfo></DetailInfo>

        </div>
    </div>
  )
}

export default MovieDetail