import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 border-top">
        <h1 className="text-center">Owner</h1>
      </div>
      <div className="row">
        <div className="col-6 p-5 text-center">
          <img
            src="media\images\MohitSinha.jpg"
            style={{
              border: "1px solid black",
              borderRadius: "100%",
              width: "45%",
            }}
          />
          <h4 className="mt-4">Mohit Sinha</h4>
          <h6>Full Stack Web Developer</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Mohit Sinha has developed StockXpert , a full-stack stock trading
            platform inspired by Zerodha. The project showcases his expertise in
            utilizing various technologies to create innovative solutions. He is
            passionate about building impactful and cutting-edge applications.
          </p>

          <p>
            {" "}
            Connect on{" "}
            <a
              href="https://www.linkedin.com/in/mohit-sinha9/"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
