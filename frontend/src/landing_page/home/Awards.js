import React from "react";

function Awards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestbroker.svg" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            StockXpert clients contribute to over 15% of all retail order
            volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures And Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stock % IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
            <img src="media\images\pressLogos.png" style={{ width: "90%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
