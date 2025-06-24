import React from 'react';
import FadeInSection from '../components/FadeInSection';

const Home: React.FC = () => (
  <section
    className="home-hero d-flex flex-column justify-content-center align-items-center text-center"
    style={{
      minHeight: '100vh',
      width: '100vw',
      padding: 0,
      margin: 0,
      boxSizing: 'border-box',
      background: 'var(--bg-main)',
      color: 'var(--text-main)',
    }}
  >
    <div
      className="d-flex flex-column justify-content-center align-items-center w-100 h-100"
      style={{ flex: 1 }}
    >
      <FadeInSection>
        <h1 className="display-2 fw-bold mb-3" style={{ letterSpacing: '1px', color: 'var(--text-main)' }}>
          United Supply Agency
        </h1>
        <p className="lead mb-4" style={{ maxWidth: 700, margin: '0 auto', color: 'var(--text-main)' }}>
          Precision Engineering for the Railways of Tomorrow
        </p>
        <p className="mb-4" style={{ maxWidth: 700, margin: '0 auto', color: 'var(--text-main)' }}>
          United Supply Agency is a trusted manufacturer and supplier of essential railway components, including adjustment cards, operating arms, end metal blocks, handles, and more. We combine advanced manufacturing with rigorous quality control to deliver reliable, high-performance parts for railway infrastructure and rolling stock.
        </p>
        <a
          href="/about"
          className="btn btn-primary btn-lg shadow-sm px-5 py-2 mt-2"
          style={{ borderRadius: '30px', fontWeight: 600 }}
        >
          Learn More
        </a>
      </FadeInSection>
      <div
        className="d-flex flex-row flex-wrap justify-content-center align-items-stretch gap-4 mt-5 w-100"
        style={{ maxWidth: 1200 }}
      >
        {/* FadeInSection wrappers added below */}
        <FadeInSection>
          <div
            className="card border-0 h-100 shadow-sm d-flex align-items-center justify-content-center"
            style={{ minWidth: 280, maxWidth: 340, flex: 1, background: 'var(--bg-card)', color: 'var(--text-main)' }}
          >
            <div className="card-body">
              <div className="mb-3"><i className="bi bi-cpu-fill" style={{ fontSize: '2rem', color: 'var(--usa-blue)' }}></i></div>
              <h5 className="card-title">State-of-the-Art Manufacturing</h5>
              <p className="card-text">
                Our modern facilities and skilled workforce ensure every railway part meets the highest standards of quality and precision.
              </p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <div
            className="card border-0 h-100 shadow-sm d-flex align-items-center justify-content-center"
            style={{ minWidth: 280, maxWidth: 340, flex: 1, background: 'var(--bg-card)', color: 'var(--text-main)' }}
          >
            <div className="card-body">
              <div className="mb-3"><i className="bi bi-lightbulb-fill" style={{ fontSize: '2rem', color: 'var(--usa-blue)' }}></i></div>
              <h5 className="card-title">Comprehensive Product Range</h5>
              <p className="card-text">
                From adjustment cards to operating arms and metal blocks, we supply a wide array of components for all railway needs.
              </p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <div
            className="card border-0 h-100 shadow-sm d-flex align-items-center justify-content-center"
            style={{ minWidth: 280, maxWidth: 340, flex: 1, background: 'var(--bg-card)', color: 'var(--text-main)' }}
          >
            <div className="card-body">
              <div className="mb-3"><i className="bi bi-shield-check" style={{ fontSize: '2rem', color: 'var(--usa-blue)' }}></i></div>
              <h5 className="card-title">Quality & Reliability</h5>
              <p className="card-text">
                Trusted by leading railways for our commitment to safety, durability, and customer satisfaction.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  </section>
);

export default Home;
