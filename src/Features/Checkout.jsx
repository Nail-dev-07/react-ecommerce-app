import { useCart } from "../contexts/CartContext";
import { fetchApi } from "../apiClient/apiClient.js";
import { useState } from "react";
import "./Checkout.css";

function Checkout() {
  const { cart, totalValue, removeFromCart } = useCart();
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const data = {
    name: firstName,
    lastName: lastName,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      fetchApi("/cart", {
        method: "POST",
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error("Failed to place order", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="check-title">Checkout</h1>
      <div className="check-container">
        <div className="shipping-info">
          <h2>Shipping Information</h2>
          <div className="shipping-box">
            <div className="row">
              <div className="name">
                <label>First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="name">
                <label>Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="row2">
              <label>Adress</label>
              <input type="text" />
            </div>
            <div className="row2">
              <label>Apartment, Suite, etc.</label>
              <input type="text" />
            </div>
            <div className="row">
              <div className="place">
                <label>Country</label>
                <select>
                  <option>Bosnia</option>
                  <option>Serbia</option>
                  <option>Croatia</option>
                </select>
              </div>
              <div className="place">
                <label>City</label>
                <select>
                  <option>Sarajevo</option>
                  <option>Belgrade</option>
                  <option>Zagreb</option>
                </select>
              </div>
              <div className="place">
                <label>Zipcode</label>
                <input type="number" />
              </div>
            </div>
            <div className="save">
              <input type="checkbox" />
              <label>Save contact information</label>
            </div>
          </div>
        </div>
        <div className="cart-info">
          <h2>Review your cart</h2>
          <div className="cart-box">
            {cart.map((product) => {
              return (
                <div className="cart-product" key={product.id}>
                  <h3>{product.title}</h3>
                  <h4>${product.price}</h4>
                  <button className="global-button" onClick={() => removeFromCart(product)}>Remove</button>
                  <hr />
                </div>
              );
            })}
            <span className="total-value">${totalValue}</span>
          </div>
        </div>
        <div className="payment-info">
          <h2>Payment Information</h2>
          <div className="payment-box">
            <div className="row">
              <button className="global-button">PayPal</button>
              <button className="global-button">Cash</button>
            </div>
            <div className="row2">
              <label>Cardholder Name</label>
              <input type="text" />
            </div>
            <div className="row2">
              <label>Card Number</label>
              <input type="number" />
            </div>
            <div className="row">
              <div className="time">
                <label>Month</label>
                <select>
                  {month.map((month) => {
                    return <option key={month}>{month}</option>;
                  })}
                </select>
              </div>
              <div className="time">
                <label>Year</label>
                <input type="number" />
              </div>
              <div className="time">
                <label>CVC</label>
                <input type="number" />
              </div>
            </div>
            <button className="global-button pay-button" type="submit">
              Pay
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default Checkout;
