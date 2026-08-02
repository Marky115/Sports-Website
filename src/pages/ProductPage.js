import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


const imageBase = process.env.PUBLIC_URL || '';
const asset = (name) => `${process.env.PUBLIC_URL}/images/${name}`;

const heroProduct = {
  slug: "phoenix-jersey",
  image: `${imageBase}/images/fullImage.avif`,
  alt: "Phoenix Suns jersey front and back over purple background",
 
};
 
const gridItems = [
  {
    slug: "miami-jersey",
    image: `${imageBase}/images/jersey2.jpg`,
    alt: "Miami Heat black jersey, shorts on grey. Link to product page.",
    name: "Miami Jersey",
    price: "$75",
  },
  {
    slug: "san-francisco-jersey",
    image: `${imageBase}/images/jersey3.jpg`,
    alt: "Warriors black gold jersey. Link to product page",
    name: "San Francisco Jersey",
    price: "$75",
  },
  {
    slug: "light-grey-shirt",
    image: `${imageBase}/images/product1.avif`,
    alt: "Male model in Hollingsworth green t-shirt. link to product page.",
    name: "Light Grey Shirt",
    price: "$120",
  },
  {
    slug: "the-grey-hoodie",
    image: asset('hoodie.avif'),
    alt: "male model in mint blue t-shirt/ link to detailed product page",
    name: "The Grey Hoodie",
    price: "$80",
  },
];
 
const rowItems = [

  {
    slug: "dark-grey-shirt",
    image: `${imageBase}/images/shoe_1.avif`,
    alt: "male model in a grey t-shirt. To product page",
    name: "Dark Grey Shirt",
    price: "$15.99",
  },
  {
    slug: "white-short",
    image: `${imageBase}/images/shoe_2.avif`,
    alt: "blue and white basketball shorts to detailed product page",
    name: "White Short",
    price: "$17.99",
  },
  {
    slug: "black-short",
    image: `${imageBase}/images/shoe_3.avif`,
    alt: "black basketball shorts with birds to detailed product page",
    name: "Black Short",
    price: "$17.99",
  },
  {
    slug: "grey-short",
    image: `${imageBase}/images/shoe_4.avif`,
    alt: "white and red basketball shorts with flower to detailed product page",
    name: "Grey Short",
    price: "$17.99",
  },
];
 
function ProductCard({ slug, image, alt, name, price }) {
  return (
    <Link to={`/product/${slug}`} className="product-card">
      <img className="product-card-image" src={image} alt={alt} />
      <div className="product-card-info">
        <p className="product-card-name">{name}</p>
        <h3 className="product-card-price">{price}</h3>
      </div>
    </Link>
  );
}
 
export default function ProductPage() {
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
    <section className="shop-all-page">
      
      <h1 className="shop-all-title">Shop All</h1>
 
      <div className="showcase-grid">
        <div className="hero-product">
          <img
            className="hero-product-image"
            src={heroProduct.image}
            alt={heroProduct.alt}
          />
          <div className="hero-product-info">
            <p className="hero-product-name">{heroProduct.name}</p>
            <h3 className="hero-product-price">{heroProduct.price}</h3>
          </div>
        </div>

        <div className="grid-quad">
          {gridItems.map((item) => (
            <ProductCard key={item.name} {...item} />
          ))}
        </div>
      </div>
 
      <div className="row-section">
        <h2 className="row-title">Complete the Look</h2>
        <div className="row-quad">
          {rowItems.map((item) => (
            <ProductCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
     <Footer/>
    </>
  );
}