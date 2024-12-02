import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online paltform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <a
          href="/signup"
          className="p-2 btn btn-primary mb-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Signup Now
        </a>
      </div>
    </div>
  );
}

export default Hero;
