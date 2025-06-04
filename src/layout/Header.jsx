import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import FetchApi from '../api/FetchApi'
import { useNavigate } from 'react-router-dom';

const Header = ({enterInput,setEnterInput }) => {
const navigate = useNavigate();


    const activeStyle = {
    color: 'red',
    fontWeight: 'bold',
    
}
const handleApi=  async ()=>{
        //is mein keya llikhu
        navigate("/movie");

}

const chnageEnterInput = (e)=>{
    setEnterInput (e.target.value)
}

const handleKeyDown=(e)=>{
    if (e.key == "Enter"){
        navigate("/movie");
        // handleApi()
        //is mein keya llikhu
    }
}


return (
    
    <header class="header">
        <nav class="navbar">
            <div class="nav-brand">
                <i class="fas fa-film"></i> 
                <span>MovieHub</span>
            </div>
            <div class="nav-search">
                <input type="text" placeholder="Search movies..." class="search-input" value ={enterInput} onChange={chnageEnterInput} onKeyDown={handleKeyDown}/>
                <button class="search-btn" onClick={handleApi}>
                    <i class="fas fa-search"></i>
                </button>
            </div>
            <div class="nav-menu">
                <NavLink to ="/" style={({ isActive }) => isActive ? activeStyle : undefined}onClick="">Home</NavLink>
                <NavLink to ="/trending" style={({ isActive }) => isActive ? activeStyle : undefined}onClick="">Trending</NavLink>
                <NavLink to ="/movie" style={({ isActive }) => isActive ? activeStyle : undefined}onClick="">Movies</NavLink>
               

                <NavLink to ="/about" style={({ isActive }) => isActive ? activeStyle : undefined}onClick="">About</NavLink>
                <NavLink to ="/register" style={({ isActive }) => isActive ? activeStyle : undefined} onClick="">Register</NavLink>
                <NavLink to ="/login" style={({ isActive }) => isActive ? activeStyle : undefined}onClick="">Login</NavLink>
               
            </div>
        </nav>
    </header>
  )
}

export default Header