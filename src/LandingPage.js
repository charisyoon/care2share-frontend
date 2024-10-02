import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Care2Share</h1>
        <p>Turn unused meal swipes into opportunities for community care.</p>
      </header>

      <section className="cta-buttons">
        <a href="/donor-signup" className="cta-button">Donate Your Swipes</a>
        <a href="/recipient-signup" className="cta-button">Claim Donated Swipes</a>
      </section>

      <section className="benefits">
        <h2>Benefits of Care2Share</h2>
        <ul>
          <li><strong>Reduces Waste:</strong> Repurpose unused meal swipes, reducing food waste.</li>
          <li><strong>Addresses Food Insecurity:</strong> Make meals more accessible to students in need.</li>
          <li><strong>Sustainability:</strong> Promote efficient resource use, reducing campus food waste.</li>
          <li><strong>Cost Savings:</strong> Help students avoid out-of-pocket food costs.</li>
          <li><strong>Supports Well-being:</strong> Ensure access to nutritious meals, contributing to academic success.</li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2024 Care2Share. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
