import { useParams } from "react-router-dom";
import { productList } from "../apiClient/apiClient.js";
import { useCart } from "../contexts/CartContext.jsx";
import "./ProductDetails.css";

function ProductDetails() {
  const { addToCart, cart, removeFromCart } = useCart();
  const { id } = useParams();
  const product = productList.find((product) => product.id === parseInt(id));
  const isInCart = cart.some(item => item.id === parseInt(id));

  if (!product) return <div>Product Not Found!</div>;

  return (
    <div className="product-details-container">
      <div className="left-side">
        <h1>{product.title}</h1>
        <img src={product.image} />
      </div>
      <div className="right-side">
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <div className="sizes">
          <span className="size-cirlce">S</span>
          <span className="size-cirlce">M</span>
          <span className="size-cirlce">L</span>
          <span className="size-cirlce">XL</span>
        </div>
        <button
          className="global-button"
          type="button"
          onClick={() => {isInCart ? removeFromCart(product) : addToCart(product)}}
        >
            {isInCart ? "Remove from cart" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
