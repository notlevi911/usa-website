import React from 'react';
import FadeInSection from '../components/FadeInSection';

const Home: React.FC = () => (
  <section
    className="home-hero d-flex flex-column justify-content-center align-items-center text-center px-2 px-md-4"
    style={{
      minHeight: '100vh',
      width: '100vw',
      padding: '1.5rem 0',
      margin: 0,
      boxSizing: 'border-box',
      background: 'var(--bg-main)',
      color: 'var(--text-main)',
    }}
  >
    <div
      className="d-flex flex-column justify-content-center align-items-center w-100 h-100"
      style={{ flex: 1, width: '100%' }}
    >
      <FadeInSection>
        <h1
          className="fw-bold mb-3"
          style={{
            letterSpacing: '1px',
            color: 'var(--text-main)',
            fontSize: '2.2rem',
            lineHeight: 1.1,
          }}
        >
          United Supply Agency
        </h1>
        <p className="lead mb-3" style={{ maxWidth: 700, margin: '0 auto', color: 'var(--text-main)', fontSize: '1.1rem' }}>
          Precision Engineering for the Railways of Tomorrow
        </p>
        <p className="mb-4" style={{ maxWidth: 700, margin: '0 auto', color: 'var(--text-main)', fontSize: '1rem' }}>
          United Supply Agency is a trusted manufacturer and supplier of essential railway components, including adjustment cards, operating arms, end metal blocks, handles, and more. We combine advanced manufacturing with rigorous quality control to deliver reliable, high-performance parts for railway infrastructure and rolling stock.
        </p>
        <a
          href="/about"
          className="btn btn-primary btn-lg shadow-sm px-5 py-2 mt-2"
          style={{ borderRadius: '30px', fontWeight: 600, fontSize: '1.1rem' }}
        >
          Learn More
        </a>
      </FadeInSection>
      <div
        className="row gap-4 mt-5 w-100 justify-content-center"
        style={{ maxWidth: 1200 }}
      >
        <div className="col-12 col-md-4 d-flex align-items-stretch mb-4 mb-md-0">
          <FadeInSection>
            <div
              className="card border-0 h-100 shadow-sm d-flex align-items-center justify-content-center w-100"
              style={{ background: 'var(--bg-card)', color: 'var(--text-main)' }}
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
        </div>
        <div className="col-12 col-md-4 d-flex align-items-stretch mb-4 mb-md-0">
          <FadeInSection delay={0.1}>
            <div
              className="card border-0 h-100 shadow-sm d-flex align-items-center justify-content-center w-100"
              style={{ background: 'var(--bg-card)', color: 'var(--text-main)' }}
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
        </div>
        <div className="col-12 col-md-4 d-flex align-items-stretch">
          <FadeInSection delay={0.2}>
            <div
              className="card border-0 h-100 shadow-sm d-flex align-items-center justify-content-center w-100"
              style={{ background: 'var(--bg-card)', color: 'var(--text-main)' }}
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
    </div>
  </section>
);

export default Home;
