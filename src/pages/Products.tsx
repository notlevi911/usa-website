import React from 'react';

const Products: React.FC = () => (
  <div className="container py-5">
    <h2 className="fw-bold mb-4">Products Details</h2>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card border-secondary h-100" style={{ background: 'var(--color-bg-card)', color: 'var(--color-text-main)' }}>
          <div className="card-body">
            <h5 className="card-title">Product One</h5>
            <p className="card-text">Description of product one.<br /><em>(Placeholder)</em></p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-secondary h-100" style={{ background: 'var(--color-bg-card)', color: 'var(--color-text-main)' }}>
          <div className="card-body">
            <h5 className="card-title">Product Two</h5>
            <p className="card-text">Description of product two.<br /><em>(Placeholder)</em></p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-secondary h-100" style={{ background: 'var(--color-bg-card)', color: 'var(--color-text-main)' }}>
          <div className="card-body">
            <h5 className="card-title">Product Three</h5>
            <p className="card-text">Description of product three.<br /><em>(Placeholder)</em></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Products;
