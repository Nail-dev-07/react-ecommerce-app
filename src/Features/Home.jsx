import { Link } from "react-router-dom";
import "./Home.css";
import Button from "../components/Button";
import kids from "../assets/kids.jpg";
import man from "../assets/man.jpg";
import woman from "../assets/woman.jpg";
import promo from "../assets/promo.jpg";
function Home() {
  return (
    <>
      <div className="hero-section">
        <h2>Discover Brands</h2>
        <p>
          Explore our curated selection of top brands and elevate your style
          with the latest trends.
        </p>
        <div className="brands">
          <Link to="/products">Bershka</Link>
          <Link to="/products">Zara</Link>
          <Link to="/products">H&M</Link>
          <Link to="/products">Koton</Link>
        </div>
      </div>
      <div className="new-arrivals">
        <h2>New Arrivals</h2>
        <div className="categories">
          <div className="category-card">
            <img src={man} alt="Men's Fashion" />
            <Link to="/products">
              <Button text="Men" />
            </Link>
          </div>
          <div className="category-card">
            <img src={woman} alt="Women's Fashion" />
            <Link to="/products">
              <Button text="Women" />
            </Link>
          </div>
          <div className="category-card">
            <img src={kids} alt="Kids' Fashion" />
            <Link to="/products">
              <Button text="Kids" />
            </Link>
          </div>
        </div>
      </div>
      <div className="promo-section">
        <div className="promo-image">
          <img src={promo} alt="Promo Photography" />
        </div>
        <div className="promo-text">
          <h3>Enjoy 20% Off This Season's Styles</h3>
          <Link to="/products">
            <Button text="View All" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
