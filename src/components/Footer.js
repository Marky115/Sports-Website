import { Link } from 'react-router-dom';
import '../styles/main.css';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Email submitted');
  };

  return (
    <footer className="site-footer">
      <div className="footer-divider" />

      <div className="footer-top">
        <div className="footer-column brand">
          <h1>PeakPerformance</h1>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
            <ul>
            <p>peakPerformance@gmail.com</p>
            <p>604-123-6978</p>
          </ul>
         
        </div>

        <div className="footer-column">
          <h3>My Account</h3>
          <ul>
            <p>Login</p>
            <p>Sign Up</p>
            <p>Order Tracking</p>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="newsletter">
          <div className="newsletter-text">
            <h2>Stay Up To Date</h2>
            <p>Receive updates on product drops, exclusive offers, events, and more - delivered right to your inbox.</p>
          </div>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Sign Up" aria-label="Sign up email" required />
            <button className="btn-submit" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;