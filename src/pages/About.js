import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  // Set up the state for controlling the nav menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
       <header>
        <nav className="nav-main">
          <h1>PeakPerformance</h1>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link className="button-nav" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="button-nav" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="button-nav" to="/checkout">Checkout</Link>
            </li>
            <li className="nav-item">
              <Link className="button-nav" to="/contact">Contact</Link>
            </li>
          </ul>
          
        </nav>
      </header>

      <section id="About-Us" className="about-section">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Mark and peak are basketball enthusiasts, who founded Performances brand to share their love of everything basketball to others. 
            Our mission is to provide basketball enthusiasts, from beginners to professionals, with top-quality basketball apparel that not 
            only enhances their performance on the court but also allows them to showcase their love for the game.
          </p>
        </div>

        <div className="about-image">
          <img src={`${process.env.PUBLIC_URL}/images/aboutUS.jpg `} alt="Basketball player paul george going up for a dunk" />
        </div>
      </section>

      <section id="company-Detail" className="about-info">
        <h1>What We Do</h1>
        <div className="info-image">
          <img src={`${process.env.PUBLIC_URL}/images/about.jpg `} alt="Basketball player paul george going up for a dunk" />
        </div>
        
        <div className="about-detail-info">
          <p>
            Elevate your basketball game with our website's premium collection of top-quality basketball shoes. 
            Discover cutting-edge designs, superior materials, and advanced technology that ensure peak performance 
            and style both on and off the court. Your journey to basketball excellence starts here. We use only the 
            best available material. Using a unisole foam material that provides on court stability like no other. 
            We ensure that players get high traction, comfort, courtfeel, beautiful designs and high energy return.
          </p>
          <p>
            We are commited to giving back to our community, inspiring the next generation and showing them that 
            anything is possible. 10% of the proceeds from our new curry 10 lines will be donated to various children's 
            charity. Thank you for choosing PeakAthletics as your go-to destination for basketball apparel. We look forward 
            to being a part of your basketball journey.
          </p>
        </div>
      </section>

       <footer>
        <h2 className="footer-h2">Stay up to date</h2>
        <div className="footer-middle">
          <input
            type="email"
            id="emailInput"
            name="email"
            aria-label="Enter email address"
            placeholder="Enter your email address"
            required
          />
          <a className="button-footer" href="#">
            Submit
          </a>
        </div>
        <div className="contact-faq">
          <div className="Contact">
            <p>
              Contact Information: <br />
              PeakPerformance@gmail.com <br />
              604-991-6969
            </p>
          </div>
          <div className="FAQ">
            <Link to="/contact">
              <p>FAQ</p>
            </Link>
            <ul>
              <li>
                <a
                  href="https://docs.google.com/document/d/14iOjHVJj4CEZE1CuFV5WEqgqJekMm4QiGPQ011kypl4/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Citations
                </a>
              </li>
              <li>
                <Link to="/about">About US</Link>
              </li>
              <li>
                <Link to="/contact">Social Media</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
