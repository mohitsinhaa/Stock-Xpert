import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="text-center mt-5 p-5">
        <h1>Our Products</h1>
        <h3 className="text-muted mt-3 fs-5">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="text-muted mt-3">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
