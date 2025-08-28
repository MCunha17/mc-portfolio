import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim()) {
      newErrors.email = true;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      setStatus("");

      try {
        const response = await fetch("https://formspree.io/f/mgvlvzqq", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          setStatus("Oops! Something went wrong. Please try again.");
        }
      } catch (error) {
        setStatus("Oops! Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="page-section">
      <h3 className="contact-title">CONTACT</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label className="control-label" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="help-block">Name is required</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label className="control-label" htmlFor="email">
            Email Address:
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="help-block">
              {errors.email === true ? "Email is required" : errors.email}
            </span>
          )}
        </div>

        {/* Message */}
        <div className="form-group">
          <label className="control-label" htmlFor="message">
            Message:
          </label>
          <textarea
            className="form-input"
            rows="5"
            id="message"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <span className="help-block">Message is required</span>
          )}
        </div>

        {/* Submit button */}
        <div className="form-group">
          <button type="submit" className="contact-submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </div>

        {/* Status message */}
        {status && (
          <p
            className={`form-status ${
              status.includes("success") ? "success" : "error"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;