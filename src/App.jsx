import React,  { useState } from 'react'
import AppLayout from "./layout/AppLayout"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import Movie from './components/Movie'
import Trending from './components/Trending'
import Register from './components/Register'
import "./styling/style.css"
import Login from './components/Login'
import About from './components/About'
import Contact from './components/Contact'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
const App = () => {
const [enterInput, setEnterInput] = useState('')

  const router = createBrowserRouter([{

    path: "/",
    element: <AppLayout
    enterInput = {enterInput}
    setEnterInput = {setEnterInput}
    />,
    children:([
      {
        path:"/",
        element: <HeroSection/>,
      },
      {
        path:"/movie",
        element: <Movie
        enterInput = {enterInput}
        setEnterInput = {setEnterInput}
        />,
      },
      {
        path:"/trending",
        element: <Trending/>,
      },
      {
        path:"/register",
        element: <Register/>,
      },
       {
        path:"/login",
        element: <Login/>,
      },
      {
        path:"/about",
        element: <About/>,
      },
      {
        path:"/contact",
        element: <Contact/>,
      },
      {
        path:"/privacy",
        element: <Privacy/>,
      },
      {
        path:"/terms",
        element: <Terms/>,
      }
    ])

  }])
  return (
    <>
    
    <RouterProvider router={router}/>
    </>
  )
}

export default App