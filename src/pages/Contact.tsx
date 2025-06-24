import React from 'react';

const Contact: React.FC = () => (
  <div className="container py-5">
    <h2 className="fw-bold mb-4">Contact Us</h2>
    <form className="row g-3">
      <div className="col-md-6">
        <input type="text" className="form-control border-secondary" placeholder="Name" required style={{ background: 'var(--color-bg-card)', color: 'var(--color-text-main)' }} />
      </div>
      <div className="col-md-6">
        <input type="email" className="form-control border-secondary" placeholder="Email" required style={{ background: 'var(--color-bg-card)', color: 'var(--color-text-main)' }} />
      </div>
      <div className="col-12">
        <textarea className="form-control border-secondary" rows={4} placeholder="Your Message" required style={{ background: 'var(--color-bg-card)', color: 'var(--color-text-main)' }}></textarea>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-outline-light">Send Message</button>
      </div>
    </form>
    <div className="mt-4">
      <p className="mb-1">Email: <a href="mailto:info@example.com">info@example.com</a></p>
      <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
    </div>
  </div>
);

export default Contact;
