import React from 'react';

const Feedback: React.FC = () => (
  <div className="container py-5">
    <h2 className="fw-bold mb-4">Customer Feedback</h2>
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card border-secondary h-100" style={{ background: 'var(--color-bg-card)', color: 'var(--color-text-main)' }}>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>"Amazing service and fantastic team!"</p>
              <footer className="blockquote-footer" style={{ color: 'var(--color-text-main)' }}>Customer A</footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-secondary h-100" style={{ background: 'var(--color-bg-card)', color: 'var(--color-text-main)' }}>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>"Highly recommend their products. Very professional."</p>
              <footer className="blockquote-footer" style={{ color: 'var(--color-text-main)' }}>Customer B</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Feedback;
