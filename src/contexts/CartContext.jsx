import { useContext, createContext, useState, useEffect } from "react";

const cartContext = createContext();

export const useCart = () => {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("Error with cart");
  }
  return context;
};

function Cart({ children }) {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = sessionStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
      console.log(savedCart);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
  }, [cart]);

  const addToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      console.log("Product already in cart, quantity increased!");
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      console.log("Cart updated!");
    }
  };

  const removeFromCart = (product) => {
    const inCart = cart.find((item) => item.id === product.id);
    if (inCart) {
      setCart((prevCart) =>
        prevCart
          .map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0),
      );
    }
  };

  const cartCounter = cart.reduce((total, item) => total + item.quantity, 0);

  const totalValue = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const value = { cart, addToCart, removeFromCart, cartCounter, totalValue };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}

export default Cart;
