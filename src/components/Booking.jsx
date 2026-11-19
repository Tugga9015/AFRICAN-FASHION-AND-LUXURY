import { useState } from "react";
import "./Booking.css";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    appointment: "",
    date: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(
      `Thank you, ${formData.name}! Your appointment request has been received.`,
    );

    setFormData({
      name: "",
      email: "",
      appointment: "",
      date: "",
    });
  };

  return (
    <section className="booking-section" id="booking">
      <div className="booking-content">
        <p className="booking-subtitle">BOOK AN APPOINTMENT</p>

        <h2>Let's Create Something Beautiful</h2>

        <p className="booking-description">
          Whether you need styling advice, want to visit our store,
          or have a custom design in mind, we'd love to hear from you.
          Book an appointment with AFRIQUE LUXE today.
        </p>

        <div className="booking-options">
          <div className="booking-option">
            <h3>Fashion Consultation</h3>
            <p>
              Get professional advice on styles, outfits, and fashion
              choices that suit your needs.
            </p>
          </div>

          <div className="booking-option">
            <h3>Store Visit</h3>
            <p>
              Arrange a visit to explore our collections and experience
              AFRIQUE LUXE.
            </p>
          </div>

          <div className="booking-option">
            <h3>Custom Design Appointment</h3>
            <p>
              Discuss your ideas and let us help bring your dream outfit
              to life.
            </p>
          </div>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <select
            name="appointment"
            value={formData.appointment}
            onChange={handleChange}
            required
          >
            <option value="">Choose Appointment Type</option>
            <option value="Fashion Consultation">
              Fashion Consultation
            </option>
            <option value="Store Visit">Store Visit</option>
            <option value="Custom Design Appointment">
              Custom Design Appointment
            </option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            required
          />

          <button type="submit">Request Appointment</button>

          {message && (
            <p className="booking-message">{message}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Booking;
