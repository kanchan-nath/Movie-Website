import React from 'react'
// import "../components/Style/style.css"

import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom'
const AppLayout = ({enterInput,setEnterInput }) => {
  return (
    <>
    <Header 
    enterInput = {enterInput}
    setEnterInput = {setEnterInput}
    />
    <Outlet/>
    <Footer/>
    </>
  )
} 

export default AppLayout