import { useState } from "react";
import "./Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Thank you for subscribing to AFRIQUE LUXE!");
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <p className="newsletter-subtitle">STAY CONNECTED</p>

        <h2>Join Our Newsletter</h2>

        <p>
          Subscribe to receive updates about our latest collections,
          special offers, and African fashion trends.
        </p>

        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <button type="submit">Subscribe</button>
        </form>

        {message && <p className="newsletter-message">{message}</p>}
      </div>
    </section>
  );
}

export default Newsletter;
