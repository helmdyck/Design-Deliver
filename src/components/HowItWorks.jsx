import React from "react";

function HowItWorks() {
  return (
    <section>
      <div className="how-container">
        <h2>How it works?</h2>
        <p>Design as you want it has just arrived.</p>
        <div className="steps">
          <div className="step">
            <i className="bi bi-check-circle-fill"></i>
            <p>Subscribe to a plan & request <br /> as many designs as you'd like.</p>
          </div>
          <div className="step">
            <i className="bi bi-gem"></i>
            <p>Receive your design within a few <br /> business days on average, Monday to Friday.</p>
          </div>
          <div className="step">
            <i className="bi bi-repeat"></i>
            <p>We'll revise the designs until <br /> you're 100% satisfied.</p>
          </div>
        </div>
        <button className="btn-plans">See plans</button>
      </div>
    </section>
  );
}

export default HowItWorks;
