import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFeedback("Thank you! Your message has been received.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-info">
        <p className="contact-subtitle">GET IN TOUCH</p>
        <h2>Contact Us</h2>

        <p>
          Have questions or need assistance? We'd love to hear from you.
          Reach out to us through our contact form.
        </p>

        <div className="contact-detail">
          <h3>Email</h3>
          <p>afriqueluxeinfo@gmail.com</p>
        </div>

        <div className="contact-detail">
          <h3>Customer Support</h3>
          <p>We're here to help with your enquiries.</p>
        </div>
      </div>

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>

          {feedback && <p className="contact-feedback">{feedback}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
