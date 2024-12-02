import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a StockXpert account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <a
          className="p-2 btn btn-primary mb-5"
          style={{ width: "15%", margin: "0 auto" }}
          href="/signup"
        >
          Sign up for free
        </a>
      </div>
    </div>
  );
}

export default OpenAccount;