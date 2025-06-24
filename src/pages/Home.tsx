import React from 'react';
import FadeInSection from '../components/FadeInSection';

const Home: React.FC = () => (
  <section
    className="home-hero d-flex flex-column justify-content-center align-items-center text-center px-2 px-md-4"
    style={{
      minHeight: '100vh',
      width: '100vw',
      padding: '2.5rem 0 1.5rem 0',
      margin: 0,
      boxSizing: 'border-box',
      background: 'var(--bg-main)',
      color: 'var(--text-main)',
    }}
  >
    <div
      className="d-flex flex-column justify-content-center align-items-center w-100 h-100"
      style={{ flex: 1, width: '100%', maxWidth: 900, margin: '0 auto' }}
    >
      <FadeInSection>
        <h1
          className="fw-bold mb-2"
          style={{ letterSpacing: '0.5px', color: 'var(--text-main)', fontSize: '2.3rem', lineHeight: 1.1 }}
        >
          United Supply Agency
        </h1>
        <p className="mb-2" style={{ fontWeight: 500, color: 'var(--text-main)', fontSize: '1.2rem', margin: '0 auto' }}>
          Precision Parts for Modern Railways
        </p>
        <p className="mb-3" style={{ maxWidth: 500, color: 'var(--text-main)', fontSize: '1.05rem', margin: '0 auto', lineHeight: 1.5 }}>
          We engineer and deliver high-quality railway components for safe, reliable, and efficient rail transport.
        </p>
        <a
          href="/about"
          className="btn btn-primary btn-md shadow-sm px-4 py-2 mt-2"
          style={{ borderRadius: '24px', fontWeight: 600, fontSize: '1rem', alignSelf: 'center', boxShadow: '0 2px 12px 0 rgba(177,60,255,0.10)' }}
        >
          Learn More
        </a>
      </FadeInSection>
      <div
        className="row mt-4 w-100 justify-content-center"
        style={{ maxWidth: 1200 }}
      >
        <div className="col-12 col-md-4 d-flex align-items-stretch h-100 mb-4 mb-md-0">
          <FadeInSection>
            <div
              className="card border-0 shadow-sm d-flex align-items-center justify-content-center w-100 h-100"
              style={{ background: 'var(--bg-card)', color: 'var(--text-main)', borderRadius: 18, boxShadow: '0 2px 16px 0 rgba(9,0,64,0.10)', minHeight: 220 }}
            >
              <div className="card-body text-center p-4 d-flex flex-column justify-content-center h-100">
                <div className="mb-2"><i className="bi bi-cpu-fill" style={{ fontSize: '1.7rem', color: 'var(--usa-blue)' }}></i></div>
                <h5 className="card-title mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Advanced Manufacturing</h5>
                <p className="card-text" style={{ fontSize: '0.97rem', lineHeight: 1.5 }}>
                  Modern facilities. Precision results.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
        <div className="col-12 col-md-4 d-flex align-items-stretch h-100 mb-4 mb-md-0">
          <FadeInSection delay={0.1}>
            <div
              className="card border-0 shadow-sm d-flex align-items-center justify-content-center w-100 h-100"
              style={{ background: 'var(--bg-card)', color: 'var(--text-main)', borderRadius: 18, boxShadow: '0 2px 16px 0 rgba(9,0,64,0.10)', minHeight: 220 }}
            >
              <div className="card-body text-center p-4 d-flex flex-column justify-content-center h-100">
                <div className="mb-2"><i className="bi bi-lightbulb-fill" style={{ fontSize: '1.7rem', color: 'var(--usa-blue)' }}></i></div>
                <h5 className="card-title mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Complete Product Range</h5>
                <p className="card-text" style={{ fontSize: '0.97rem', lineHeight: 1.5 }}>
                  All key railway parts, one trusted source.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
        <div className="col-12 col-md-4 d-flex align-items-stretch h-100">
          <FadeInSection delay={0.2}>
            <div
              className="card border-0 shadow-sm d-flex align-items-center justify-content-center w-100 h-100"
              style={{ background: 'var(--bg-card)', color: 'var(--text-main)', borderRadius: 18, boxShadow: '0 2px 16px 0 rgba(9,0,64,0.10)', minHeight: 220 }}
            >
              <div className="card-body text-center p-4 d-flex flex-column justify-content-center h-100">
                <div className="mb-2"><i className="bi bi-shield-check" style={{ fontSize: '1.7rem', color: 'var(--usa-blue)' }}></i></div>
                <h5 className="card-title mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Trusted Quality</h5>
                <p className="card-text" style={{ fontSize: '0.97rem', lineHeight: 1.5 }}>
                  Built for safety. Proven for reliability.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
