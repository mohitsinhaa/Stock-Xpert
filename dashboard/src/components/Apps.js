import React from "react";

const Apps = () => {
  return (
    <div className="apps">
      <img
        src="https://i.ibb.co/GRrH6SF/wae23.png"
        style={{ width: "1000px" }}
      />
      <h4>Download our App!</h4>
      <div className="row">
        <div className="col-4">
          <a href="">
            {" "}
            <img
              src="https://icon-library.com/images/google-play-download-icon/google-play-download-icon-0.jpg"
              style={{ width: "200px" }}
            />
          </a>
        </div>
        <div className="col-4">
          <a href="">
            <img
              src="https://i.ibb.co/S5BQFW8/pngwing-com-12.png"
              style={{ width: "200px" }}
            />
          </a>
        </div>
        <div className="col-4">
          <a href="">
            {" "}
            <img
              src="https://joplinapp.org/images/BadgeWindows.png"
              style={{ width: "200px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Apps;
