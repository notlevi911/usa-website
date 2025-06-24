import React from 'react';

const KeyPersons: React.FC = () => (
  <section className="section text-center">
    <h2 className="mb-5">Key Persons</h2>
    <div className="row justify-content-center align-items-center g-4">
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
        <div className="card text-center border-0 w-100" style={{ maxWidth: 280, background: 'var(--bg-card)', color: 'var(--text-main)' }}>
          <div className="card-body">
            <div className="rounded-circle bg-secondary mx-auto mb-3" style={{ width: 70, height: 70 }} />
            <h5 className="card-title">Person One</h5>
            <p className="card-text">CEO<br /><span className="text-muted" style={{ fontSize: '0.9em' }}>(Placeholder)</span></p>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
        <div className="card text-center border-0 w-100" style={{ maxWidth: 280, background: 'var(--bg-card)', color: 'var(--text-main)' }}>
          <div className="card-body">
            <div className="rounded-circle bg-secondary mx-auto mb-3" style={{ width: 70, height: 70 }} />
            <h5 className="card-title">Person Two</h5>
            <p className="card-text">CTO<br /><span className="text-muted" style={{ fontSize: '0.9em' }}>(Placeholder)</span></p>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
        <div className="card text-center border-0 w-100" style={{ maxWidth: 280, background: 'var(--bg-card)', color: 'var(--text-main)' }}>
          <div className="card-body">
            <div className="rounded-circle bg-secondary mx-auto mb-3" style={{ width: 70, height: 70 }} />
            <h5 className="card-title">Person Three</h5>
            <p className="card-text">COO<br /><span className="text-muted" style={{ fontSize: '0.9em' }}>(Placeholder)</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default KeyPersons;
