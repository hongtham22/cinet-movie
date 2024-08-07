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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage/>,

      },
      // {
      //   path: "/movie/info",
      //   element: <MovieDetail/>,
      // },

      {
        path: '/movie/:id',
        element: <MovieDetail/>,


      },


    ]
  },

  // {
  //   path: "/test",
  //   element: <div>Hello world!</div>,
  // },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
