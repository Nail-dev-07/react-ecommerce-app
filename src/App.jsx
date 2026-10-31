import {Routes, Route} from 'react-router-dom';
import Layout from './Features/Layout';
import Home from './Features/Home';
import About from './Features/About';
import Register from './Features/Register';
import Login from './Features/Login';
import Shop from './Features/Shop';
import ProductDetails from "./Features/ProductDetails";
import Cart from './Features/Cart';
import Checkout from './Features/Checkout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;