import React from "react";
import Dw from "../assets/Dw.png"
import plus from "../assets/plus.png"

function Hero() {
  return (
    <section className="hero-container">
        <div className="brand-elements">
            <img src={Dw} alt="" className="d-img"/>
            <img src={plus} alt="" className="plus-img"/>
        </div>
      <div className="hero-body">
        <h1>Big ideas <br /> for small projects</h1>
        <p>Focus on your business. <br /> We do the design.</p>
        <button className="btn-plans">See plans</button>
      </div>
    </section>
  );
}

export default Hero;
