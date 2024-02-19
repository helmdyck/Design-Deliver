import React from "react";
import D from "../assets/D.png"
import plus from "../assets/plus.png"

function Hero() {
  return (
    <section className="hero-container">
        <div className="brand-elements">
            <img src={D} alt="" className="d-img"/>
            <img src={plus} alt="" className="plus-img"/>
        </div>
      <div className="hero-body">
        <h1>A design agency <br /> for startups</h1>
        <p>Focus on what you do best: your business. We do the design.</p>
        <button>See plans</button>
      </div>
    </section>
  );
}

export default Hero;
