import { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner.jsx'
import './HomePage.css'
import Content from '../../components/Content/Content.jsx';
import People from '../../components/Content/People.jsx';
import Footer from '../../components/Footer/Footer.jsx';



function HomePage() {

  const [nowUpComing, setNowUpComing] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [newTV, setNewTV] = useState([]);
  const [trendPeople, setTrendPeople] = useState([]);
  console.log(nowUpComing.length);
  
  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      // const urlNowPlay = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
      const urlUpComing = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
      const urlPopular = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

      // const urlNewTV = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1'; 
      const urlNewTV = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';
      
      const urlTrendPeople = 'https://api.themoviedb.org/3/trending/person/day?language=en-US';

      const [responseUpComing, 
            responsePopular, 
            responseNewTV,
            responeTrendPeople ] = await Promise.all([

        fetch(urlUpComing, options),
        fetch(urlPopular, options),
        fetch(urlNewTV, options),
        fetch(urlTrendPeople, options),
      
      ])
      const dataUpComing = await responseUpComing.json();
      const dataPopular = await responsePopular.json();
      const dataNewTV = await responseNewTV.json();
      const dataTrendPeople = await responeTrendPeople.json();
      


    //   const response = await fetch(url1, options);
    //   const data = await response.json();
      console.log(dataUpComing.results);
      setNowUpComing(dataUpComing.results);
      setPopularMovies(dataPopular.results);
      setNewTV(dataNewTV.results);
      setTrendPeople(dataTrendPeople.results.filter(person => person.profile_path !== null));
    };

    fetchMovies();
  }, [])


  return (
    <div>
      <Banner data={nowUpComing.slice(0,5)}></Banner>

      <Content title={"Popular Movies"}
                content={"Here are some of the most popular movies that our users & viewers enjoy."}
               data={popularMovies.slice(0,20)}></Content>

      <Content title={"New releases"}
          content={"Check out the highly rated TV shows, available at Cinet."}
          data={newTV.slice(0,20)}></Content>

      <People data={trendPeople.slice(0,6)}></People>

      <Footer></Footer>
    </div>
    
  )
}

export default HomePage