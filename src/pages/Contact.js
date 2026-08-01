
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/contact.css';

// ContactPage Component
const ContactPage = () => {
  return (
    <>
      {/* Header Section */}
      <header>
        <nav className="nav-main">
          <h1>PeakPerformance</h1>
          <ul className="nav-menu">
           <li className="nav-item"><Link className="button-nav" to="/Home">Home</Link></li>
            <li className="nav-item">
              <Link className="button-nav" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="button-nav" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="button-nav" to="/checkout">Checkout</Link>
            </li>
          </ul>
         
        </nav>
      </header>
      {/* Content Section */}
      <section className="Contact-design">
        <section className="spacing">
          <h1>Need help?</h1>
          <p className="contact">
            Here at PeakAtheletics we value clarity and honesty over everything...
          </p>
        </section>

        <div className="form-container">
          <section className="contact-form-spacing">
            <label htmlFor="topic">Topic:</label>
            <input type="text" id="topic" name="topic_input" className="inputForm" />
          </section>

          <section className="contact-form-spacing">
            <label htmlFor="firstname">First Name:</label>
            <input type="text" id="firstname" name="first_name" className="inputForm" />
          </section>

          <section className="contact-form-spacing">
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" id="lastname" name="last_name" className="inputForm" />
          </section>

          <section className="contact-form-email">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" className="inputForm" />
          </section>

          <section className="contact-form-message">
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" className="commentArea"></textarea>
          </section>

          <Link to="/">
            <button className="submit-btn">Submit</button>
          </Link>
        </div>
      </section>

     
      <Footer/>
    </>
  );
};

export default ContactPage;
