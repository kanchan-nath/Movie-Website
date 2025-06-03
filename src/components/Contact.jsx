import React from 'react'

const Contact = () => {
  return (
    <div id="contact" class="page">
            <div class="page-header">
                <h1 class="page-title">Contact Us</h1>
                <p class="page-subtitle">We'd love to hear from you. Send us a message!</p>
            </div>

            <div class="form-container">
                <form onsubmit="handleContactSubmit(event)">
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
                        <label class="form-label">Phone Number</label>
                        <input type="tel" class="form-input" placeholder="Enter your phone number"/>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Subject *</label>
                        <select class="form-select" required>
                            <option value="">Select a subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="technical">Technical Support</option>
                            <option value="feedback">Feedback</option>
                            <option value="partnership">Partnership</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Message *</label>
                        <textarea class="form-textarea" placeholder="Enter your message here..." required></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-full">Send Message</button>
                </form>
            </div>
        </div>
  )
}

export default Contact