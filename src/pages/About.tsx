import React from 'react';

const About: React.FC = () => (
  <section className="section d-flex flex-column align-items-center justify-content-center text-center" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
    <div style={{ maxWidth: 800, width: '100%', margin: '0 auto' }}>
      <h2 className="mb-4" style={{ fontWeight: 700 }}>About United Supply Agency</h2>
      <p style={{ fontWeight: 600, marginBottom: 24 }}>
        <strong>United Supply Agency</strong> is a leading manufacturer and supplier of high-quality railway components and parts, trusted by railways and infrastructure companies across the region. With decades of experience and a commitment to engineering excellence, we deliver precision-crafted products that keep railways running safely and efficiently.
      </p>
      <p style={{ marginBottom: 24 }}>
        Our extensive product range includes adjustment cards, operating arms, end metal blocks, handles, and a variety of other essential railway hardware. Every item is manufactured using advanced processes and rigorous quality control to ensure durability, reliability, and compliance with industry standards.
      </p>
      <p style={{ marginBottom: 24 }}>
        At <strong>United Supply Agency</strong>, we believe in innovation, customer satisfaction, and long-term partnerships. Our dedicated team of engineers and support staff work closely with clients to provide tailored solutions, technical expertise, and on-time delivery for projects of any scale.
      </p>
      <p className="text-muted" style={{ fontSize: '0.95em', marginBottom: 0 }}>
        We are proud to contribute to the growth and modernization of the railway sector, supporting safe and sustainable transportation for all.
      </p>
    </div>
  </section>
);

export default About;
