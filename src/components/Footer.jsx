import React from 'react'

const Footer = () => {
  return (
     <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <i class="fas fa-film"></i>
                    <span>MovieHub</span>
                </div>
                <div class="footer-links">
                    <a href="#" onClick="">About</a>
                    <a href="#" onClick="">Contact</a>
                    <a href="#" onClick="">Privacy</a>
                    <a href="#" onClick="">Terms</a>
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