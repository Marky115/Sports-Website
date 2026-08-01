
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const imageBase = process.env.PUBLIC_URL || '';

const CheckoutPage = () => {
  const subtotal = 75.99 + 17.99;

  return (
    <>
      {/* NAVIGATION SECTION */}
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
              <Link className="button-nav" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="button-nav" to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* CONTENT SECTION */}
      <section id="checkout-Design" className="checkout">
        <h1>Checkout</h1>
        {/* First product */}
        <div className="cart-products">
          <div className="product-info">
            <img
              src={`${imageBase}/images/hoodie.avif`}
              alt="The Grey Hoodie over grey background"
              className="checkout-img"
            />
          </div>
          <div className="price-info">
            <h2 className="carth">The Grey Hoodie</h2>
            <p className="cartp">Qt1 - $80</p>
            <label htmlFor="quantity">
              Quantity:
              <input type="number" id="quantity" name="quantity" defaultValue="1" />
            </label>
          </div>
        </div>

  

           <div className="subprice">
            <h2>Subtotal:</h2>
            <h2>${subtotal.toFixed(2)}</h2>
          </div>

          <div className="form-h2">
            <h2>Contact Information:</h2>
          </div>

          <form action="#" method="post">
            <label htmlFor="first-name">First Name:</label>
            <input type="text" id="first-name" name="first-name" className="checkout-input" required />
            
            <label htmlFor="last-name">Last Name:</label> 
            <input type="text" id="last-name" name="last-name" className="checkout-input" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="checkout-input" required />
            
            <label htmlFor="shopping-address">Shipping Address:</label>
            <input type="text" id="shopping-address" name="shopping-address" className="checkout-input" required />
            
            <div className="card-info2">
              <div>
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" placeholder="City" required />
              </div>
              <div>
                <label htmlFor="province">Province:</label>
                <input type="text" id="province" name="province" placeholder="Province" required />
              </div>
              <div>
                <label htmlFor="postal">Postal Code:</label>
                <input type="text" id="postal" name="postal" placeholder="Postal Code" required />
              </div>
            </div>
            
            <div className="form-h2">
              <h2>Payment Info:</h2>
            </div>
            
            <label htmlFor="credit-card">Credit Card Number:</label>
            <input
              type="text"
              id="credit-card"
              name="credit-card"
              className="checkout-input"
              placeholder="0000 0000 0000 0000"
              required
            />
            
            <div className="card-info">
              <div>
                <label htmlFor="month-year">Expiry Date:</label>
                <input type="text" id="month-year" name="month-year" placeholder="MM/YY" required />
              </div>
              <div>
                <label htmlFor="CVV">CVV:</label>
                <input type="text" id="CVV" name="CVV" placeholder="123" required />
              </div>
            </div>
          </form>

          {/* Confirmation button */}
          <form action="Confirmation.html" method="post">
            <input type="submit" value="Order" className="submit-btn2" />
          </form>
      </section>
      <Footer/>
    </>
  );
};


export default CheckoutPage;
