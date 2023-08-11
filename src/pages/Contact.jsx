import React, { useState } from 'react';
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const validateEmail = (email) => {
    // Email validation using regular expression
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check for required fields and valid email
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = true;
    }
    if (!formData.email.trim()) {
      errors.email = true;
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) {
      errors.message = true;
    }
    setErrors(errors);

    if (!errors.name && !errors.email && !errors.message) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section style={{ padding: '30px' }}>
      <h3 style={{ paddingBottom: '10px' }}>Contact</h3>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
          <label className="control-label col-sm-2" htmlFor="name">
            Name:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              style={{ marginBottom: '10px' }}
            />
            {errors.name && <span className="help-block">Name is required</span>}
          </div>
        </div>
        <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
          <label className="control-label col-sm-2" htmlFor="email">
            Email Address:
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              style={{ marginBottom: '10px' }}
            />
            {errors.email && <span className="help-block">Email is required</span>}
          </div>
        </div>
        <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            rows="5"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ marginBottom: '10px' }}
          ></textarea>
          {errors.message && <span className="help-block">Message is required</span>}
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
export default Contact;