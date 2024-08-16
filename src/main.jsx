import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './pages/HomePage/HomePage.jsx';
import MovieDetail from './pages/MovieDetail/MovieDetail.jsx';
import TvDetail from './pages/TvDetail/TvDetail.jsx';
import PeopleDetail from './pages/PeopleDetail/PeopleDetail.jsx';
import SearchPage from './pages/SearchPage/SearchPage.jsx';
import HeaderItem from './pages/HeaderItem/HeaderItem.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage/>,

      },
      {
        path: '/movie/:id',
        element: <MovieDetail/>,


      },
      {
        path: '/tv/:id',
        element: <TvDetail/>,


      },
      {
        path: '/person/:id',
        element: <PeopleDetail></PeopleDetail>
      },

      {
        
        path: '/search',
        element: <SearchPage></SearchPage>
      },
      {
        path: '/:category/type/:title',
        element: <HeaderItem />

      },
      


    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
