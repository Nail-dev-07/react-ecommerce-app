import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="logo">
        <NavLink to="/">
          <img src="/logo.svg" alt="Logo" />
        </NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "active-link" : ""}
      >
        Home
      </NavLink>
        </li>
        <li>
          <NavLink 
        to="/products" 
        className={({ isActive }) => isActive ? "active-link" : ""}
      >
        Shop
      </NavLink>
        </li>
        <li>
          <NavLink 
        to="/about" 
        className={({ isActive }) => isActive ? "active-link" : ""}
      >
        About
      </NavLink>
        </li>
        <li>
          <NavLink 
        to="/about" 
        className={({ isActive }) => isActive ? "active-link" : ""}
      >
        Contact
      </NavLink>
        </li>
        <li>
          <NavLink 
        to="/products" 
        className={({ isActive }) => isActive ? "active-link" : "red-link"}
      >
        Sale
      </NavLink>
        </li>
      </ul>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="header-icons">
        <NavLink to="/cart">
          <span class="material-symbols-outlined header-icon">shopping_cart</span>
        </NavLink>
        <NavLink to="/register">
          <span className="material-symbols-outlined header-icon">account_circle</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
