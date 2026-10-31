import { productList } from "../apiClient/apiClient.js";
import { useState, useEffect } from "react";
import "./Shop.css";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext.jsx";

function Shop() {
  const { addToCart, removeFromCart, cart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        setProducts(productList);
        console.log(products);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    }

    loadProducts();
  }, []);

  return (
    <div className="shop-container">
      <h1>Shop Page</h1>
      <div className="products-container">
        {products.map((p) => {
          return (
            <div className="product" key={p.id}>
              <Link to={`${p.id}`}>
                <h3>{p.title}</h3>
                <h4>${p.price}</h4>
                <p>{p.description}</p>
                <img src={p.image} />
              </Link>
              <button
                className="global-button"
                type="button"
                onClick={() => {
                  cart.some((item) => item.id === p.id)
                    ? removeFromCart(p)
                    : addToCart(p);
                }}
              >
                {cart.some((item) => item.id === p.id)
                  ? "Remove from cart"
                  : "Add to cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Shop;
