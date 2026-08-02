
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';

const About = () => {  
 

  return (  
    <>  
       {/* --- HEADER (Unchanged) --- */}
       <header>  
        <nav className="nav-main">  
          <h1>PeakPerformance</h1>  
          <ul className="nav-menu">  
            <li className="nav-item"><Link className="button-nav" to="/">Home</Link></li>
            <li className="nav-item"><Link className="button-nav" to="/shop">Shop</Link></li>  
            <li className="nav-item"><Link className="button-nav" to="/checkout">Checkout</Link></li>  
            <li className="nav-item"><Link className="button-nav" to="/contact">Contact</Link></li>  
          </ul>  
        </nav>  
      </header>

      {/* --- NEW RESPONSIVE MAIN SECTION --- */}
      <main className="about-main-container">
        
        {/* Left Column: Typography */}
        <section className="about-text-column">
          
          <div className="text-block">
            <h2>About Us</h2>
            <p>
              Mark and peak are basketball enthusiasts, who founded Performances brand to share their love of everything basketball to others.
            </p>
            <p>
              Our mission is to provide basketball enthusiasts, from beginners to professionals, with top-quality basketball apparel.
            </p>
          </div>

          <div className="text-block">
            <h2>What We Do</h2>
            <p>
              Discover cutting-edge designs, superior materials, and advanced technology that ensure peak performance and style both on and off the court.
            </p>
            <p>
              Using a unisole foam material that provides on court stability like no other. We ensure that players get high traction, comfort, courtfeel, beautiful designs and high energy return.
            </p>
          </div>

        </section>

        {/* Right Column: Image */}
        <section className="about-image-column">
          <img src={`${process.env.PUBLIC_URL}/images/aboutUs.avif`} alt="Basketball player paul george going up for a dunk" />
        </section>

      </main>
      <Footer/>
    </>  
  );  
};

export default About;