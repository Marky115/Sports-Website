
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
          <h2>2023 New Releases</h2>
          <p>Finds all our new products here!</p>
          <div className="media-scroller">
            <div className="media-element">
              <Link to="/shop">
                <img
                  src={`${process.env.PUBLIC_URL}/images/shoes.jpg `}
                  width="385"
                  height="188"
                  alt="Stephen Curry 8s grey color way over gold background"
                />
              </Link>
              <p className="caption">Product 1</p>
            </div>
            <div className="media-element">
              <Link to="/shop">
                <img
                  src={`${process.env.PUBLIC_URL}/images/product3.jpg`}
                  width="385"
                  height="188"
                  alt="Stephen Curry 8s blue colorway over gold blue background"
                />
              </Link>
              <p className="caption">Product 2</p>
            </div>
            <div className="media-element">
              <Link to="/shop">
                <img
                  src={`${process.env.PUBLIC_URL}/images/product4.jpg`}
                  width="385"
                  height="188"
                  alt="Stephen Curry 8s black color way over pinkish purple background"
                />
              </Link>
              <p className="caption">Product 3</p>
            </div>
            <div className="media-element">
              <Link to="/shop">
                <img
                  src={`${process.env.PUBLIC_URL}/images/product5.jpg`}
                  width="385"
                  height="188"
                  alt="Stephen Curry 8s black and orange colorway over yellowish orange background"
                />
              </Link>
              <p className="caption">Product 4</p>
            </div>
            <div className="media-element">
              <Link to="/shop">
                <img
                  src={`${process.env.PUBLIC_URL}/images/shoes.jpg`}
                  width="385"
                  height="188"
                  alt="Stephen Curry 8s grey color way over gold background"
                />
              </Link>
              <p className="caption">Product 5</p>
            </div>
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

      {/* PRODUCT LISTING SECTION */}
      <section className="element">
        <div className="product-grid">
          <div className="product-home-item">
            <div className="item-info">
              <Link to="/shop">
                <img
                  src={`${process.env.PUBLIC_URL}/images/shoes.jpg `}
                  alt="Stephen Curry grey shoes over gold background"
                />
              </Link>
              <p>Select from a catalogue of shoes</p>
              <Link className="butn" to="/shop">
                <h3>Shoes</h3>
              </Link>
            </div>
          </div>
          <div className="product-home-item">
            <div className="item-info">
              <Link to="/shop">
                <img
                  src={`${process.env.PUBLIC_URL}/images/jerseys.jpg `}
                  alt="Golden State warriors 2022 city edition jerseys over grey background"
                />
              </Link>
              <p>Select from a catalogue of Jerseys</p>
              <Link className="butn" to="/shop">
                <h3>Jerseys</h3>
              </Link>
            </div>
          </div>
          <div className="product-home-item">
            <div className="item-info">
              <Link to="/shop">
                <img
                  src={`${process.env.PUBLIC_URL}/images/short1Home.png`}
                  alt="White and blue floral basketball shorts over grey background"
                />
              </Link>
              <p>Select from a catalogue of Shorts</p>
              <Link className="butn" to="/shop">
                <h3>Shorts</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default HomePage;
