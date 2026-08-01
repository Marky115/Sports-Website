import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import '../styles/confirmation.css';

const Confirmation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [orderNumber] = useState('#ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase());

    // Trigger animation on component mount
    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return(
        <>
            {/* NAVIGATION SECTION */}  
            <header>
                <nav className="nav-main">
                    <h1>PeakPerformance</h1>
                    <ul className="nav-menu">
                        <li className="nav-item"><Link className="button-nav" to="/Home">Home</Link></li>
                        <li className="nav-item"><Link className="button-nav" to="/shop">Shop</Link></li>
                        <li className="nav-item"><Link className="button-nav" to="/about">About</Link> </li>
                        <li className="nav-item"><Link className="button-nav" to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>

            {/* CONTENT SECTION */}
            <section id="confirmation" className={`confirmation-container ${isVisible ? 'slide-in' : ''}`}>
                {/* Success Header */}
                <div className="success-header">
                    <div className="checkmark-circle">
                        <div className="checkmark">✓</div>
                    </div>
                    <h1>Thank you for your Purchase!</h1>
                    <p className="order-number">Order {orderNumber}</p>
                </div>

                {/* Order Summary Card */}
                <div className="order-summary-card">
                    <h3>Order Summary</h3>
                    <div className="order-items">
                        <div className="order-item">
                            <span>The Grey Hoodie</span>
                            <span>$93</span>
                        </div>
                       
                        <div className="order-total">
                            <span>Total</span>
                            <span>$93.98</span>
                        </div>
                    </div>
                    <div className="delivery-info">
                        <p>Confirmation email sent</p>
                        <p>Estimated delivery: 3-5 business days</p>
                    </div>
                </div>

                <div className="action-buttons">
                    <Link to="/shop">
                        <button className="submit-btn">Continue Shopping</button>
                    </Link>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Confirmation;