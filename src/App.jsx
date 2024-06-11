import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import styled from "styled-components"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Error, HomeLayout, Cocktail, About } from './index'; // Ensure consistent naming
import Landing from './Landing';
import {loader as landingLoader} from './Landing'
import {loader as singleCocktailLoader} from "./Cocktail"
import NewsLetter from './NewsLetter';


function App() {

  const [name, setName] = useState("yewinMyat");
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<Error/>,
      element: <HomeLayout name={name} />,
       
      children:[
              {
                path:"/about",
                element:<About/>
              },
              {
                 index:true,
                loader: landingLoader,
                element:<Landing/>
              },
              {
                path:"/cocktail/:id",
                loader:singleCocktailLoader,
                element:<Cocktail/>
              },
              {
                path:"/NewsLetter",
                element:<NewsLetter/>
              }  ]
    } 
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
