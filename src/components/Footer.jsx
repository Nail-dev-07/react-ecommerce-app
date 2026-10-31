
import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="footer">
        <div className="footer-list">
            <div className="footer-links">
                <div className="foot-sec">
                    <h3>Shop</h3>
                    <ul>
                        <Link to="/products">Dresses</Link>
                        <Link to="/products">Jackets</Link>
                        <Link to="/products">Skirts</Link>
                        <Link to="/products">Shoes & Bags</Link>
                        <Link to="/products">Gift Cards</Link>
                        <Link to="/products">Salese & Offers</Link>
                    </ul>
                </div>
                <div className="foot-sec">
                    <h3>Information</h3>
                    <ul>
                        <Link to="/">About</Link>
                        <Link to="/">Terms and Conditions</Link>
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Delivery and Return</Link>
                    </ul>
                </div>
                <div className="foot-sec">
                    <h3>Support</h3>
                    <ul>
                        <Link to="/">Contact</Link>
                        <Link to="/">Help</Link>
                        <Link to="/">FAQs</Link>
                    </ul>
                </div>
            </div>
        </div>
      <div className="footer-content">
        <div className="footer-text">
            <p>Designed and developed by: <b>ITAcademy</b></p>
        </div>
        <div className="footer-icons">
          <span className="material-symbols-outlined footer-icon">favorite</span>
          <span className="material-symbols-outlined footer-icon">favorite</span>
          <span className="material-symbols-outlined footer-icon">favorite</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
