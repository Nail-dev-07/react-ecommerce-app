import { useCart } from "../contexts/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, totalValue, cartCounter } = useCart();
  return (
    <>
      <h1 className="cart-title">Your Cart</h1>
      <div className="cart-container">
        <div className="left-side">
          <span className="cart-length">{cartCounter} items in a cart</span>
          <div className="cart-items">
            {cart.map((product) => {
              return (
                <div className="cart-item" key={product.id}>
                  <h3>{product.title}</h3>
                  <h4>${product.price}</h4>
                  <h5>{product.quantity}</h5>
                  <button
                    className="global-button"
                    type="button"
                    onClick={() => removeFromCart(product)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right-side">
          <hr />
          <h2>Order Summary</h2>
          <div className="sec">
            <span className="muted">Subtotal</span>
            <span>{totalValue}</span>
          </div>
          <div className="sec">
            <span className="muted">Discount</span>
            <span>0</span>
          </div>
          <hr />
          <div className="sec">
            <h3>Total</h3>
            <span className="total-value">${totalValue}</span>
          </div>
          <Link to="/checkout">
            <button type="button" className="global-button check-button">
              Go to Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Cart;
