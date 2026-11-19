import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>AFRIQUE LUXE</h2>
          <p>
            Celebrating African fashion, culture and elegance through timeless
            designs and quality craftsmanship.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#features">Why Choose Us</a>
          <a href="#shop">Collections</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="footer-socials">
          <h3>Follow Us</h3>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
            TikTok
          </a>
        </div>

        <div className="footer-payment">
          <h3>Payment Methods</h3>
          <div className="payment-options">
            <span>VISA</span>
            <span>Mastercard</span>
            <span>Verve</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} AFRIQUE LUXE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
