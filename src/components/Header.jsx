import { useState } from "react";
import "./Header.css";

function Header({ cartCount, onCartClick, theme, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <a href="#home" className="logo" aria-label="AFRIQUE LUXE Home">
        <img
          src="/images/afriqueluxelogo.png"
          alt="AFRIQUE LUXE"
        />
      </a>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        ☰
      </button>

      <nav
        id="main-navigation"
        className={menuOpen ? "nav-links active" : "nav-links"}
      >
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
        <a href="#features" onClick={() => setMenuOpen(false)}>Why Choose Us</a>
        <a href="#shop" onClick={() => setMenuOpen(false)}>Collections</a>
        <a href="#booking" onClick={() => setMenuOpen(false)}>Booking</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>

      <div className="header-actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={onThemeToggle}
          aria-label="Switch website theme"
          aria-pressed={theme === "light"}
        >
          <span className="toggle-circle"></span>
        </button>

        <button
          type="button"
          className="cart-button"
          onClick={onCartClick}
          aria-label={`Open shopping bag, ${cartCount} items`}
        >
          🛍️
          <span className="cart-count">{cartCount}</span>
        </button>
      </div>
    </header>
  );
}

export default Header;