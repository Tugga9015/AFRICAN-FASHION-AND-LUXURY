import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-image">
        <img
          src="/images/General African Attire.png"
          alt="African fashion collection"
        />
      </div>

      <div className="about-content">
        <p className="about-subtitle">OUR STORY</p>

        <h2>Celebrating African Elegance</h2>

        <p>
          AFRIQUE LUXE is dedicated to celebrating African fashion,
          culture, and creativity. We bring together beautiful
          designs that combine tradition with modern style.
        </p>

        <a href="#shop" className="about-button">
          Explore Our Collections
        </a>
      </div>
    </section>
  );
}

export default About;
