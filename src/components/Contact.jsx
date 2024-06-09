// src/components/Contact.js
import React from 'react';



function Contact() {
  return (
    <div>
    
      
      <section className="page-container contact">
        <div className="main-contact">
          <div className="contact-details">
            <div className="address-details">
              <div className="location">
                <p>
                  <i className="fa-solid fa-location-dot fa-lg"></i>
                  <span> Location </span> <br />
                  1234 Elm Street, Suite 567<br />
                  New York, NY 10001, United States
                </p>
              </div>
              <div className="mail">
                <p>
                  <i className="fa-regular fa-envelope fa-lg"></i>
                  <span> E-mail</span> <br />
                  <a href="mailto:info@sahajtravelling.com">info@sahajtravelling.com</a>
                </p>
              </div>
              <div className="call">
                <p>
                  <i className="fa-solid fa-mobile-button fa-lg"></i>
                  <span> Call </span> <br />
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </p>
              </div>
              <div className="image">
                <img src="../Images/company-img.jpg" alt="image of company" />
                <figcaption><strong>This is our office</strong></figcaption>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <div className="form-data">
              <h2 className="md-heading">Contact Us</h2>
              <p>
                Have a question or need assistance? Fill out the form below and we'll get back to you shortly.
              </p>
              <div className="form-container">
      <form className="form">
        <div className="form-group">
          <label htmlFor="email">Company Email</label>
          <input type="text" id="email" name="email" required=""/>
        </div>
        <div className="form-group">
          <label htmlFor="textarea">How Can We Help You?</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required="">          </textarea>
        </div>
        <button className="form-submit-btn" type="submit">Submit</button>
      </form>
    </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
