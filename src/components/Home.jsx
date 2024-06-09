import React from 'react';


function Home() {
  return (
    <div>
     
      <section className="explores" id="explore-places">
        <div className="page-container">
          <div className="row1 row">
            <div className="img-box">
              <img src="../Images/Rajasthan.jpg" alt="Jaisalmer, Rajasthan" />
            </div>
            <div className="content-box">
              <h2 className="md-heading">Jaisalmer, Rajasthan</h2>
              <p>
                The honey-gold sandstone Jaisalmer Fort rises like a mirage from the desert sands, a 12th-century citadel with 99 bastions. Some 3,000 people reside within its walls and its narrow winding lanes are lined with elaborate Jain temples and havelis. The Sam Sand Dunes (25 miles outside the city), though s.
                <a href="../Html/About.html"> more</a>
              </p>
            </div>
          </div>
          <div className="row2 row">
            <div className="img-box">
              <h2 className="md-heading">Mumbai, Maharashtra</h2>
              <p className="page-container">
                The most cosmopolitan city in India, Mumbai is home to heritage architecture such as the Gateway of India, Chhatrapati Shivaji Maharaj Terminus, Mumbai is home to heritage architecture such as the Gateway of India, Chhatrapati Shivaji Maharaj Terminus,
                <a href="../Html/About.html"> more</a>
              </p>
            </div>
            <div className="content-box">
              <img src="../Images/Mumai.jpg" alt="Mumbai, Maharashtra" />
            </div>
          </div>
        </div>
      </section>
      <section className="last-section page-container">
        <div className="main-div">
          <div className="first back-black">
            <i className="fas fa-shuttle-van fa-spin fa-spin-reverse"></i>
            <h3 className="md-heading">Adventurous</h3>
            <p>Embark on thrilling adventures and explore the world's most breathtaking landscapes. Whether it's trekking through dense forests, scaling towering mountains, or diving into the depths of the ocean, our adventurous tours promise an unforgettable experience.</p>
          </div>
          <div className="second">
            <i className="fas fa-hand-holding-usd fa-bounce"></i>
            <h3 className="md-heading">Affordable Prices</h3>
            <p>Discover budget-friendly travel options without compromising on quality. Our tours offer competitive prices, allowing you to experience the joys of travel without breaking the bank. From affordable accommodation to discounted activities, we make travel accessible to everyone.</p>
          </div>
          <div className="third back-black">
            <i className="fas fa-user-check fa-bounce"></i>
            <h3 className="md-heading">Expert Guidance</h3>
            <p>Gain valuable insights and guidance from experienced travel experts. Our team of seasoned professionals is dedicated to ensuring that your journey is smooth, safe, and filled with enriching experiences. With our expertise, you can travel with confidence and peace of mind.</p>
          </div>
        </div>
      </section>
      <footer>
        <a href="">
          <img src="../Images/fb-footer.png" alt="" height="80rem" width="80rem" />
        </a>
        <a href="">
          <img src="../Images/yt-footer.png" alt="" height="80rem" width="80rem" />
        </a>
        <a href="">
          <img src="../Images/twitter-footer.png" alt="" height="80rem" width="80rem" />
        </a>
        <p className="text-light">&copy; 2023 Your Name or Your Company Name</p>
      </footer>
    </div>
  );
}

export default Home;
