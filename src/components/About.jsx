import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
     
      <body>
        
        <div className="page-container about">
          <h2 className="md-heading">About Us</h2>
          <div className="para">
            <p>Welcome to Sahaj Travelling, your go-to source for all travel-related information. We're dedicated to providing you with the best travel experiences, with a focus on dependability, customer service, and uniqueness.</p>
          </div>
          <div className="lists">
            <div className="list-1">
              <ul>
                <li><i className="fa-solid fa-check"></i>&nbsp; Expert Guides</li>
                <li><i className="fa-solid fa-check"></i>&nbsp; Unique Destinations</li>
                <li><i className="fa-solid fa-check"></i>&nbsp; Personalized Trips</li>
              </ul>
            </div>
            <div className="list-2">
              <ul>
                <li><i className="fa-solid fa-check"></i>&nbsp; Hassle-free Planning</li>
                <li><i className="fa-solid fa-check"></i>&nbsp; Cultural Experiences</li>
                <li><i className="fa-solid fa-check"></i>&nbsp; Memorable Adventures</li>
              </ul>
            </div>
          </div>
          <div className="services">
            <div>
              <h1>5000</h1>
              <p>Happy Travelers</p>
            </div>
            <div>
              <h1>1000</h1>
              <p>Destinations Explored</p>
            </div>
            <div>
              <h1>200</h1>
              <p>Experienced Guides</p>
            </div>
            <div>
              <h1>100</h1>
              <p>Adventure Activities</p>
            </div>
          </div>
          <div className="footer-about">
            <p>Ready to embark on your next journey? Contact us today to start planning!</p>
            <Link href="../Html/contact.html">CONTACT US</Link>
          </div>
        </div>
      </body>
    </div>
  );
}

export default About;
