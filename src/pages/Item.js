import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';

const imageBase = process.env.PUBLIC_URL || '';
const asset = (name) => `${process.env.PUBLIC_URL}/images/${name}`;

const products = {
  'phoenix-jersey': {
    mainImage: asset('fullImage.avif'),
    mainAlt: 'The Phoenix Jersey, front view',
    thumbnails: [
      { image: asset('fullImage.avif'), alt: 'The Phoenix Jersey, detail view 1' },
      { image: asset('fullImage.avif'), alt: 'The Phoenix Jersey, detail view 2' },
      { image: asset('fullImage.avif'), alt: 'The Phoenix Jersey, detail view 3' },
    ],
    name: 'The Phoenix Jersey',
    price: '$75',
    description:
      'A premium jersey designed for comfort and performance with a clean modern look.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  'miami-jersey': {
    mainImage: `${imageBase}/images/product1.avif`,
    mainAlt: 'Miami jersey front view',
    thumbnails: [
      { image: asset('product1.avif'), alt: 'Miami jersey detail view 1' },
      { image: asset('hoodie.avif'), alt: 'Miami jersey detail view 2' },
      { image: asset('backHoodie.avif'), alt: 'Miami jersey detail view 3' },
    ],
    name: 'Miami Jersey',
    price: '$75',
    description: 'A sharp, comfortable jersey for everyday wear and match-day energy.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  'san-francisco-jersey': {
    mainImage: `${imageBase}/images/hoodie.avif`,
    mainAlt: 'San Francisco jersey front view',
    thumbnails: [
      { image: asset('hoodie.avif'), alt: 'San Francisco jersey detail view 1' },
      { image: asset('backHoodie.avif'), alt: 'San Francisco jersey detail view 2' },
      { image: asset('high-neck-updated.avif'), alt: 'San Francisco jersey detail view 3' },
    ],
    name: 'San Francisco Jersey',
    price: '$75',
    description: 'Built for a bold look with a lightweight feel and classic fit.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  'light-grey-shirt': {
    mainImage: `${imageBase}/images/product1.avif`,
    mainAlt: 'Light grey shirt front view',
    thumbnails: [
      { image: asset('product1.avif'), alt: 'Light grey shirt detail view 1' },
      { image: asset('hoodie.avif'), alt: 'Light grey shirt detail view 2' },
      { image: asset('backHoodie.avif'), alt: 'Light grey shirt detail view 3' },
    ],
    name: 'Light Grey Shirt',
    price: '$120',
    description: 'A clean, understated shirt that pairs well with any look.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  'the-grey-hoodie': {
    mainImage: `${imageBase}/images/hoodie.avif`,
    mainAlt: 'The Grey Hoodie front view',
    thumbnails: [
      { image: asset('hoodie.avif'), alt: 'The Grey Hoodie detail view 1' },
      { image: asset('backHoodie.avif'), alt: 'The Grey Hoodie detail view 2' },
      { image: asset('high-neck-updated.avif'), alt: 'The Grey Hoodie detail view 3' },
    ],
    name: 'The Grey Hoodie',
    price: '$80',
    description: 'A fresh colorway with a relaxed, easy-fit silhouette.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  'dark-grey-shirt': {
    mainImage: asset('shoe_1.avif'),
    mainAlt: 'Dark grey shoe front view',
    thumbnails: [
      { image: asset('shoe_1.avif'), alt: 'Dark grey shoe detail view 1' },
      { image: asset('shoe_2.avif'), alt: 'Dark grey shoe detail view 2' },
      { image: asset('shoe_3.avif'), alt: 'Dark grey shoe detail view 3' },
    ],
    name: 'Dark Grey Shoe',
    price: '$15.99',
    description: 'A sleek athletic shoe with cushion and support for daily movement.',
    sizes: ['7', '8', '9', '10', '11'],
  },
  'white-short': {
    mainImage: asset('shoe_2.avif'),
    mainAlt: 'White short front view',
    thumbnails: [
      { image: asset('shoe_2.avif'), alt: 'White short detail view 1' },
      { image: asset('shoe_3.avif'), alt: 'White short detail view 2' },
      { image: asset('shoe_4.avif'), alt: 'White short detail view 3' },
    ],
    name: 'White Short',
    price: '$17.99',
    description: 'Lightweight comfort with a clean look for training or lounging.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  'black-short': {
    mainImage: asset('shoe_3.avif'),
    mainAlt: 'Black short front view',
    thumbnails: [
      { image: asset('shoe_3.avif'), alt: 'Black short detail view 1' },
      { image: asset('shoe_4.avif'), alt: 'Black short detail view 2' },
      { image: asset('shoe_1.avif'), alt: 'Black short detail view 3' },
    ],
    name: 'Black Short',
    price: '$17.99',
    description: 'A versatile short with a bold silhouette and everyday comfort.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  'grey-short': {
    mainImage: asset('shoe_4.avif'),
    mainAlt: 'Grey short front view',
    thumbnails: [
      { image: asset('shoe_4.avif'), alt: 'Grey short detail view 1' },
      { image: asset('shoe_1.avif'), alt: 'Grey short detail view 2' },
      { image: asset('shoe_2.avif'), alt: 'Grey short detail view 3' },
    ],
    name: 'Grey Short',
    price: '$17.99',
    description: 'A relaxed-fit short that keeps your look sharp and easy.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
};

const sizeChart = {
  image: asset('high-neck-updated.avif'),
  alt: 'Size chart reference',
  label: 'SIZE CHART',
  title: 'The Sweatshirt',
  description: 'Peak is 5\'6" and wears a Small.',
};

const relatedStyles = [
  { 
    image: asset('shoe_1.avif'), 
    alt: 'Related style 1',
    name: 'Performance Court Shoe',
    price: '$120.00'
  },
  { 
    image: asset('shoe_2.avif'), 
    alt: 'Related style 2',
    name: 'Unisole Low Top',
    price: '$110.00'
  },
  { 
    image: asset('shoe_3.avif'), 
    alt: 'Related style 3',
    name: 'Pro Trainer',
    price: '$135.00'
  },
  { 
    image: asset('shoe_4.avif'), 
    alt: 'Related style 4',
    name: 'Elite High Top',
    price: '$145.00'
  },
];

export default function ItemPage({ onAddToCart }) {
  const { slug } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const product = products[slug] || products['light-grey-shirt'];

  const handleAddToCart = () => {
    onAddToCart?.({
      image: product.mainImage,
      alt: product.mainAlt,
      name: product.name,
      size: selectedSize,
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
           <li className="nav-item"><Link className="button-nav" to="/">Home</Link></li>
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
                  'item-size' + (selectedSize === size ? ' item-size-selected' : '')
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

        <div className="item-size-chart-container">
          <img className="item-size-chart-image" src={sizeChart.image} alt={sizeChart.alt} />
          <div className="item-size-chart-text">
            <p className="item-size-chart-label">{sizeChart.label}</p>
            <h3 className="item-size-chart-title">{sizeChart.title}</h3>
            <p className="item-size-chart-description">{sizeChart.description}</p>
          </div>
      </div>
      </section>

      <section id="item-related-styles" className="item-related-styles">
        <h2 className="item-related-heading">Related Styles</h2>
        <div className="item-related-row">
          {relatedStyles.map((item) => (
            /* The new wrapper div for each product */
            <div key={item.image} className="item-related-card">
              
              <img
                className="item-related-image"
                src={item.image}
                alt={item.alt}
              />
              
              {/* The new text details */}
              <div className="item-related-details">
                <h3 className="item-related-name">{item.name}</h3>
                <p className="item-related-price">{item.price}</p>
              </div>

            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}