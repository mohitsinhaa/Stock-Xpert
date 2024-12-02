import React from "react";

function Hero() {
  return (
    <div className="container p-5" style={{ backgroundColor: "#87CEEB" }}>
      <div className="row">
        <h1 className="fs-3">Support Portal</h1>
        <div className="col-6">
          <h1 className="fs-2 mt-4">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <div class="input-group mt-4">
            <div class="form-outline">
              <input
                id="search-input"
                type="search"
                placeholder="Eg: how do i activate F&O"
                class="form-control"
                style={{ width: "400px" }}
              />
            </div>
            <button id="search-button" type="button" class="btn btn-primary">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="col-6">
          <h1 className="fs-3">Featured</h1>
          <p>1.MCX Crude option contract expiry - November 2024</p>
          <p>2.Trading holiday on account of Gurunanak Jayanti</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
