import React from 'react';

const Career: React.FC = () => (
  <div className="container py-5">
    <h2 className="fw-bold mb-4">Career</h2>
    <ul className="list-group">
      <li className="list-group-item border-secondary mb-3" style={{ background: 'var(--color-bg-card)', color: 'var(--color-text-main)' }}>
        <h5>Frontend Developer</h5>
        <p>Requirements: React, TypeScript, CSS, Responsive Design.<br /><em>(Placeholder)</em></p>
      </li>
      <li className="list-group-item border-secondary mb-3" style={{ background: 'var(--color-bg-card)', color: 'var(--color-text-main)' }}>
        <h5>Backend Developer</h5>
        <p>Requirements: Node.js, Express, Database.<br /><em>(Placeholder)</em></p>
      </li>
      <li className="list-group-item border-secondary" style={{ background: 'var(--color-bg-card)', color: 'var(--color-text-main)' }}>
        <h5>UI/UX Designer</h5>
        <p>Requirements: Figma, Adobe XD, Minimal Design.<br /><em>(Placeholder)</em></p>
      </li>
    </ul>
  </div>
);

export default Career;
