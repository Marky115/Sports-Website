import { Link } from "react-router-dom";




export default function Cart({ isOpen, onClose, items, onQuantityChange, onRemove }) {
  
    if (!isOpen) return null;


  return (
    <>
      <div className="cart-backdrop" onClick={onClose} />

      <aside className="cart-drawer">  
        <button  
          type="button"  
          className="cart-close"  
          onClick={onClose}  
          aria-label="Close cart"  
        >    
        </button>

        <h2 className="cart-title">YOUR CART</h2>

        <div className="cart-items">
          {items.length === 0 && (
            <p className="cart-empty">Your cart is empty.</p>
          )}

          {items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img className="cart-item-image" src={item.image} alt={item.alt} />

              <div className="cart-item-row">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">{item.price}</span>
              </div>

              <p className="cart-item-size">{item.size}</p>

              <div className="cart-item-actions">
                <div className="cart-item-quantity">
                  <button
                    type="button"
                    onClick={() => onQuantityChange(item.id, Math.max(1, item.quantity - 1))}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="cart-item-remove"
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <Link to="/checkout" className="cart-checkout">
          Checkout
        </Link>

        <Link to="/cart" className="cart-view-link" onClick={onClose}>
          View Cart
        </Link>
      </aside>
    </>
  );
}