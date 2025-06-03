import React from 'react';
import "../styling/register.css";

const About = () => {
  return (
    <div id="about" className="page">
      <div className="page-header">
        <h1 className="page-title">About MovieHub</h1>
        <p className="page-subtitle">Your trusted companion in the world of cinema</p>
      </div>

      <div className="aboutme">
        <h3>Our Story</h3>
        <p>MovieHub was founded with a simple mission: to help movie lovers discover their next favorite film. We believe that great movies have the power to inspire, entertain, and bring people together.</p>
        <p>Since our launch, we've built a comprehensive database of movies spanning all genres, from classic Hollywood films to the latest blockbusters and independent gems.</p>
      </div>

      <div className="aboutme">
        <h3>What We Offer</h3>
        <p>Our platform provides detailed information about movies including cast, crew, plot summaries, user ratings, and professional reviews. We also offer personalized recommendations based on your viewing preferences.</p>
      </div>

      <div className="aboutme">
        <h3>Our Mission</h3>
        <p>To create the most comprehensive and user-friendly movie discovery platform, helping film enthusiasts explore the rich world of cinema and connect with stories that matter to them.</p>
      </div>

      <div className="aboutme">
        <h3>Contact Information</h3>
        <p>Have questions or suggestions? We'd love to hear from you!</p>
        <p>Email: info@moviehub.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Cinema Street, Hollywood, CA 90210</p>
      </div>
    </div>
  );
};

export default About;
