import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="text-center">
          <h1 className="text-center mt-5 mb-3">Charges</h1>
          <p className="text-muted fs-5">List of all charges and taxes</p>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <img src="media\images\pricing0.svg" />
          <h3>Free equity delivery</h3>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media\images\intradayTrades.svg" />
          <h3>Intraday and F&O trades</h3>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media\images\pricing0.svg" />
          <h3>Free direct MF</h3>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
