import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <section id="contact" className="text-center p-4 bg-light rounded shadow">
        <h2 className="mb-3">Contact Us</h2>
        <p className="lead">We'd love to hear from you! Reach out to us through any of the channels below.</p>
        <div className="contact-info">
          <p><i className="fas fa-envelope me-2"></i>Email: <a href="mailto:rishabmaurya097@gmail.com">rishabmaurya097@gmail.com</a></p>
          <p><i className="fas fa-phone me-2"></i>Phone: <a href="tel:+91 7007020979">+91 7007020979</a></p>
          <p><i className="fas fa-map-marker-alt me-2"></i>Location: 222806 Gla University Mathura Up India </p>
        </div>
        <div className="social-icons mt-3">
          <a href="#" className="me-3 text-dark"><i className="fab fa-facebook fa-2x"></i></a>
          <a href="#" className="me-3 text-dark"><i className="fab fa-twitter fa-2x"></i></a>
          <a href="#" className="me-3 text-dark"><i className="fab fa-instagram fa-2x"></i></a>
          <a href="#" className="me-3 text-dark"><i className="fab fa-linkedin fa-2x"></i></a>
        </div>
        <form className="mt-4">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-dark">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;