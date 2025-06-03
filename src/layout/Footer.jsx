import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {

     const activeStyle = {
    color: 'red',
    fontWeight: 'bold',
    
  }

  return (
     <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <i class="fas fa-film"></i>
                    <span>MovieHub</span>
                </div>
                <div class="footer-links">
                    <NavLink to ="/about" style={({ isActive }) => isActive ? activeStyle : undefined}
                    onClick="">About</NavLink>
                    <NavLink to ="/contact" style={({ isActive }) => isActive ? activeStyle : undefined}onClick="">Contact</NavLink>
                    <NavLink to ="privacy" style={({ isActive }) => isActive ? activeStyle : undefined}onClick="">Privacy</NavLink>
                    <NavLink to ="/terms" style={({ isActive }) => isActive ? activeStyle : undefined}onClick="">Terms</NavLink>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 MovieHub. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer