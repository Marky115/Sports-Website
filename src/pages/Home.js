
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; 

const HomePage = () => {
  return (
    <>
      {/* Wrapper for the Home body */}
      <div className="Home-body">
        {/* NAVIGATION SECTION */}
         <header>
          <nav className="nav-main">
            <h1>PeakPerformance</h1>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link className="button-nav" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="button-nav" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="button-nav" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="button-nav" to="/checkout">Checkout</Link>
              </li>
            </ul>
            <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </header>
          

        {/* CONTENT SECTION */}
        <section id="banner" className="banner">
          <img
            src={`${process.env.PUBLIC_URL}/images/banner.jpg`}
            alt="Home page banner of basketball athlete Zion Williamson going for a dunk"
          />
        </section>

        <section id="slider" className="slider">
          <h2>New Releases</h2>
        
          <div className="media-scroller">
            <div className="media-element">
              <Link to="/shop">
                <img
                  src={`${process.env.PUBLIC_URL}/images/shoe_1.avif`}
                  width="385"
                  height="188"
                  
                />
              </Link>
              <p className="caption">Ant Shoe 1</p>
               <p className="price-tag">$90</p>
            </div>
            <div className="media-element">
              <Link to="/shop">
                <img
                  src={`${process.env.PUBLIC_URL}/images/shoe_2.avif`}
                  width="385"
                  height="188"
                  
                />
              </Link>
              <p className="caption">Ant Shoe 2</p>
              <p className="price-tag">$90</p>
            </div>
            <div className="media-element">
              <Link to="/shop">
                <img
                  src={`${process.env.PUBLIC_URL}/images/shoe_3.avif`}
                  width="385"
                  height="188"
                 
                />
              </Link>
              <p className="caption">Ant Shoe 3</p>
              <p className="price-tag">$90</p>
            </div>
            <div className="media-element">
              <Link to="/shop">
                <img
                  src={`${process.env.PUBLIC_URL}/images/shoe_4.avif`}
                  width="385"
                  height="188"
                  
                />
              </Link>
              <p className="caption">Ant Shoe 4</p>
              <p className="price-tag">$90</p>
            </div>
            <div className="media-element">
              <Link to="/shop">
                <img
                  src={`${process.env.PUBLIC_URL}/images/shoe_1.avif`}
                  width="385"
                  height="188"
                />
              </Link>
              <p className="caption">Ant Shoe 1</p>
               <p className="price-tag">$90</p>
            </div>
          </div>
          <div className="view-all-wrap">
            <Link to="/shop" className="view-all-button">View All</Link>
          </div>
        </section>
      </div>

      <section id="video">
        <video
          className="video-framing"
          autoPlay
          loop
          muted
          aria-describedby="videoDesc"
        >
          <source src={`${process.env.PUBLIC_URL}/images/curryvideo.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      
      
      <Footer/>
    </>
  );
};

export default HomePage;
