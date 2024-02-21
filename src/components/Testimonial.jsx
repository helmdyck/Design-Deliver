import React from "react";

function Testimonial() {
  return (
    <section>
      <div className="testimonial">
        <blockquote>
          <i className="bi bi-chat-quote-fill"></i>
          <p className="highlight">"Now I can dedicate more time to my strategy"</p>
          <p className="client-quote">
            "I was wasting my time trying to sell my product with a graphic
            that didn't express its true value. <br /> Now I can dedicate more time to
            my strategy <br /> and creating new products."
          </p>
          <span></span>
        </blockquote>
      </div>
    </section>
  );
}

export default Testimonial;
