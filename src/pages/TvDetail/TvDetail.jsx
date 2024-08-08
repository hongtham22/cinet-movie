import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BannerDetail from '../../components/BannerDetail/BannerDetail';
import Cast from '../../components/Cast/Cast';
import DetailInfo from '../../components/DetailInfo/DetailInfo';
import './TvDetail.css';

function TvDetail() {
    const { id } = useParams();
    const [tvDetails, setTvDetails] = useState(null);
    const [cast, setCast] = useState([]);
    const [recommendationTv, setRecommendationTv] = useState([]);
    const [director, setDirector] = useState('');
    const [trailerTv, setTrailerTv] = useState('');
    

    useEffect(() => {
        const fetchTvData = async () => {
            try {
                const urlTvDetail = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
                const urlCast = `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`;
                const urlReTv = `https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&page=1`;
                const urlTrailerTv = `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`;

                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
                    }
                };

                // Tv Detail
                const responseTv = await fetch(urlTvDetail, options);
                const dataTvDetail = await responseTv.json();
                console.log("TV Details Data:", dataTvDetail);
                setTvDetails(dataTvDetail);

                // Cast and Recommendations
                const [responeCast, responeReTv] = await Promise.all([
                    fetch(urlCast, options),
                    fetch(urlReTv, options),
                ]);

                const dataCast = await responeCast.json();
                // console.log("Cast Data:", dataCast);
                setCast(dataCast.cast || []);

                const directorData = dataCast.crew.find(member => member.job === 'Director');
                if (directorData) {
                    setDirector(directorData.name);
                }

                const dataReTv = await responeReTv.json();
                // console.log("Recommendations Data:", dataReTv);
                setRecommendationTv(dataReTv.results);

                // Trailer Tv
                const TvKey = await fetch(urlTrailerTv, options);
                const dataTrailer = await TvKey.json();
                setTrailerTv(dataTrailer.results[0]?.key || '');

            } catch (error) {
                console.error("Fetch error:", error);
            }
        };

        fetchTvData();

    }, [id]);

    return (
        <div className='tv-detail'>
            <BannerDetail movie={tvDetails}
                        director={director}
            ></BannerDetail>

            <div className="main-container">
                <Cast
                    cast={cast.slice(0, 12)}
                    recommendationMovie={recommendationTv.slice(0, 9)}
                    trailerMovie={trailerTv}
                    status={'tv'}
                ></Cast>

                <DetailInfo movie={tvDetails}></DetailInfo>
            </div>
        </div>
    );
}

export default TvDetail;
