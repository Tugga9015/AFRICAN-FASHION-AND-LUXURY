import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="hero-subtitle">
          CELEBRATING AFRICAN ELEGANCE
        </p>

        <h1>
          Discover the Beauty of African Fashion
        </h1>

        <p>
          Explore timeless African fashion, carefully selected
          designs, and styles that celebrate our rich heritage.
        </p>

        <a href="#shop" className="hero-button">
          Explore Collections
        </a>
      </div>
    </section>
  );
}

export default Hero;
