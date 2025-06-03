import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {

      const activeStyle = {
    color: 'red',
    fontWeight: 'bold',
    
  }

  return (
     
    <header class="header">
        <nav class="navbar">
            <div class="nav-brand">
                <i class="fas fa-film"></i>
                <span>MovieHub</span>
            </div>
            <div class="nav-search">
                <input type="text" placeholder="Search movies..." class="search-input" onInput=""/>
                <button class="search-btn" onClick="">
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