import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


const product = {
  mainImage: "/images/hoodie.avif",
  mainAlt: "The Grey Hoodie, front view",
  thumbnails: [
    { image: "/images/backHoodie.avif", alt: "The Grey Hoodie, detail view 1" },
    { image: "/images/backHoodie.avif", alt: "The Grey Hoodie, detail view 2" },
    { image: "/images/backHoodie.avif", alt: "The Grey Hoodie, detail view 3" },
  ],
  name: "The Grey Hoodie",
  price: "$80",
  description:
    "Simple and essential. A crispy hoodie with a fleece interior made from 100% certified organic material keeping you ready for when the game needs you. To care for The Hoodie, wash in cold water and hang to dry. We do not recommend drying as shrinking will occur.",
  sizes: ["S", "M", "L", "XL"],
};
 
const sizeChart = {
  image: "/images/high-neck-updated.avif",
  alt: "Size chart reference",
  caption: "SIZE CHART The Hoodie Anna is 5'4 and wears a Small.",
};
 
const relatedStyles = [
  { image: "/images/shoe_1.avif", alt: "Related style 1" },
  { image: "/images/shoe_2.avif", alt: "Related style 2" },
  { image: "/images/shoe_3.avif", alt: "Related style 3" },
  { image: "/images/shoe_4.avif", alt: "Related style 4" },
];
 
export default function ItemPage({ onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

   const handleAddToCart = () => {
    onAddToCart({
      image: product.mainImage,
      alt: product.mainAlt,
      name: product.name,
      size: selectedSize || "One Size",
      price: product.price,
      quantity: quantity,
    });
  };
 
  const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1));
  const increaseQty = () => setQuantity((q) => q + 1);
 
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
      <section className="item-page">
        
        <div className="item-gallery">
          <div className="item-thumbnails">
            {product.thumbnails.map((thumb) => (
              <img
                key={thumb.image}
                className="item-thumbnail"
                src={thumb.image}
                alt={thumb.alt}
              />
            ))}
          </div>
          <img
            className="item-main-image"
            src={product.mainImage}
            alt={product.mainAlt}
          />
        </div>
 
        {/* Details */}
        <div className="item-details">
          <h1 className="item-name">{product.name}</h1>
 
          <p className="item-description">{product.description}</p>
 
          <h2 className="item-price">{product.price}</h2>
 
          <div className="item-sizes">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                className={
                  "item-size" + (selectedSize === size ? " item-size-selected" : "")
                }
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
 
          <div className="item-actions">
            <div className="item-quantity">
              <button
                type="button"
                className="item-quantity-btn"
                onClick={decreaseQty}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="item-quantity-value">{quantity}</span>
              <button
                type="button"
                className="item-quantity-btn"
                onClick={increaseQty}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
 
            <button type="button" className="item-add-to-cart" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
        
        {/* Size chart */}
        <div className="item-size-chart">
          <img
            className="item-size-chart-image"
            src={sizeChart.image}
            alt={sizeChart.alt}
          />
          <p className="item-size-chart-caption">{sizeChart.caption}</p>
        </div>
         </section>
      
        <section id='item-related-styles' className="item-related-styles">
            <h2 className="item-related-heading">Related Styles</h2>
                <div className="item-related-row">
                {relatedStyles.map((item) => (
                    <img
                    key={item.image}
                    className="item-related-image"
                    src={item.image}
                    alt={item.alt}
                    />
                ))}
                </div>
        </section>
     

      <Footer />
    </>
  );
}