import React from "react";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="navbar-body">
        <i className="bi bi-arrow-up-circle"></i>
        <button>Benefits</button>
        <button>Recent work</button>
        <button>Scope of work</button>
        <button>Pricing</button>
        <button>FAQs</button>
      </div>
    </div>
  );
}

export default Navbar;
