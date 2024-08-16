import { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner.jsx'
import './HomePage.css'
import Content from '../../components/Content/Content.jsx';
import People from '../../components/Content/People.jsx';
import { useLocation } from 'react-router-dom';


function HomePage() {

  const [nowUpComing, setNowUpComing] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [newTV, setNewTV] = useState([]);
  const [trendPeople, setTrendPeople] = useState([]);
  
  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      const urlUpComing = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
      const urlTrendingMovie = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
      

      const urlNewTV = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';
      
      const urlTrendPeople = 'https://api.themoviedb.org/3/trending/person/day?language=en-US';

      const [responseUpComing, 
            responseTrending, 
            responseNewTV,
            responeTrendPeople ] = await Promise.all([

        fetch(urlUpComing, options),
        fetch(urlTrendingMovie, options),
        fetch(urlNewTV, options),
        fetch(urlTrendPeople, options),
      
      ])
      const dataUpComing = await responseUpComing.json();
      const dataTrending = await responseTrending.json();
      const dataNewTV = await responseNewTV.json();
      const dataTrendPeople = await responeTrendPeople.json();
      
      // console.log(dataUpComing.results);
      setNowUpComing(dataUpComing.results);
      setTrendingMovies(dataTrending.results);
      setNewTV(dataNewTV.results);
      setTrendPeople(
        dataTrendPeople.results.filter(person => person.profile_path && person.gender !== 0)
      );
    };

    fetchMovies();
  }, [])


  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);



  return (
    
    <div>
      <Banner data={nowUpComing.slice(0,5)}></Banner>

      <Content title={"Trending Movies"}
              content={"Here are some of the most popular movies that our users & viewers enjoy."}
              data={trendingMovies.slice(0,20)}
              status={'movie'}>

      </Content>

      <Content title={"New TV releases"}
              content={"Check out the trending TV series, available at Cinet."}
              data={newTV.slice(0,20)}
              status={'tv'}>
            
      </Content>

      <People data={trendPeople.slice(0,6)}></People>

    </div>
    
  )
}

export default HomePage