import React from 'react'
import "../styling/register.css"
import { NavLink } from 'react-router-dom'
const Login = () => {
  return (
    <>
    <div id="login" class="page">
            <div class="page-header">
                <h1 class="page-title">Welcome Back</h1>
                <p class="page-subtitle">Sign in to your MovieHub account</p>
            </div>

            <div class="form-container">
                <form onsubmit="handleLoginSubmit(event)">
                    <div class="form-group">
                        <label class="form-label">Email Address *</label>
                        <input type="email" class="form-input" placeholder="Enter your email address" required/>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Password *</label>
                        <input type="password" class="form-input" placeholder="Enter your password" required/>
                    </div>
                    
                    <div class="form-group checkbox-group">
                        <input type="checkbox" class="checkbox" id="remember"/>
                        <label for="remember">Remember me</label>
                    </div>
                    
                    <button type="submit" class="btn btn-full">Sign In</button>
                    
                    <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                        <a href="#" class="link" onclick="handleForgotPassword()">Forgot your password?</a>
                    </div>
                    
                    <div style={{textAlign: "center",
                    marginTop: "1rem",}}>
                        <span>Don't have an account? </span>
                        <NavLink to ="/register" class="link" onclick="showPage('register')">Sign up here</NavLink>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login