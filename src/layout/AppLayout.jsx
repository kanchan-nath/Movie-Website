import React from 'react'
// import "../components/Style/style.css"

import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom'
const AppLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AppLayout