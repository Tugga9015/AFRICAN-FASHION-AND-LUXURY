import "./WhyChooseUs.css";

function WhyChooseUs() {
  const features = [
    {
      title: "Unique Designs",
      description: "Discover beautiful designs inspired by African culture.",
    },
    {
      title: "Quality Fabrics",
      description: "Enjoy carefully selected fabrics and quality materials.",
    },
    {
      title: "Customer Support",
      description: "We are always ready to assist our customers.",
    },
    {
      title: "Secure Payments",
      description: "Enjoy a safe and reliable shopping experience.",
    },
  ];

  return (
    <section id="features" className="why-choose-section">
      <div className="section-heading">
        <p>THE AFRIQUE LUXE EXPERIENCE</p>
        <h2>Why Choose AFRIQUE LUXE?</h2>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
