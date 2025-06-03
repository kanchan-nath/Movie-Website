import React from 'react'
import "../styling/register.css"
import { NavLink } from 'react-router-dom'
const Register = () => {
  return (
    <div id="register" class="page">
            <div class="page-header">
                <h1 class="page-title">Join MovieHub</h1>
                <p class="page-subtitle">Create your account and start discovering amazing movies</p>
            </div>

            <div class="form-container">
                <form onsubmit="handleRegisterSubmit(event)">
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">First Name *</label>
                            <input type="text" class="form-input" placeholder="Enter your first name" required/>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Last Name *</label>
                            <input type="text" class="form-input" placeholder="Enter your last name" required/>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Email Address *</label>
                        <input type="email" class="form-input" placeholder="Enter your email address" required/>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Username *</label>
                        <input type="text" class="form-input" placeholder="Choose a username" required/>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">Password *</label>
                            <input type="password" class="form-input" placeholder="Create a password" required/>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Confirm Password *</label>
                            <input type="password" class="form-input" placeholder="Confirm your password" required/>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Date of Birth</label>
                        <input type="date" class="form-input"/>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Favorite Movie Genre</label>
                        <select class="form-select">
                            <option value="">Select your favorite genre</option>
                            <option value="action">Action</option>
                            <option value="comedy">Comedy</option>
                            <option value="drama">Drama</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Science Fiction</option>
                            <option value="thriller">Thriller</option>
                            <option value="documentary">Documentary</option>
                        </select>
                    </div>
                    
                    <div class="form-group checkbox-group">
                        <input type="checkbox" class="checkbox" id="newsletter" checked/>
                        <label for="newsletter">Subscribe to our newsletter for movie recommendations</label>
                    </div>
                    
                    <div class="form-group checkbox-group">
                        <input type="checkbox" class="checkbox" id="terms" required/>
                        <label for="terms">I agree to the <a href="#" class="link" onclick="handleTermsClick()">Terms of Service</a> and <a href="#" class="link" onclick="handlePrivacyClick()">Privacy Policy</a> *</label>
                    </div>
                    
                    <button type="submit" class="btn btn-full">Create Account</button>
                    
                    <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                        <span>Already have an account? </span>
                        <NavLink to="/login" class="link" onclick="showPage('login')">Login here</NavLink>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Register