import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>The StockXpert Platform</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-4 mt-3">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-4 mt-3">
          <img src="media/images/loginBg.png" style={{ maxWidth: "50px" }} />
          <p className="text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-4 mt-3">
          <img src="media/images/sensibullLogo.svg" />
          <p className="text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-4 mt-3">
          <img
            src="media/images/streakLogo.png"
            style={{ maxWidth: "200px" }}
          />
          <p className="text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-4 mt-3">
          <img src="media/images/logo.png" style={{ maxWidth: "80px" }} />
          <p className="text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-4 mt-3">
          <img src="media/images/dittoLogo.png" style={{ maxWidth: "150px" }} />
          <p className="text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <button
          className="p-2 btn btn-primary mb-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Signup for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
