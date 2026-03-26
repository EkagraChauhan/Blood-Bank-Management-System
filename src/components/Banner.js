import React from "react";
import bbImage from "../assets/images/bb.webp"

const Banner = () => {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100" style={{height: '70vh'}}
               src={bbImage}
               alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100" style={{height: '70vh'}}
               src="	https://www.geetanjalihospital.co.in/images/blood-bank.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100" style={{height: '70vh'}}
              src="https://parkhospital.in/storage/app/public/upload/bVpUZUp5LjIPVY0FPJiko4LvxuJSC2zSsSLraEeU.png"
              alt="Second slide"
            />
          </div>
        </div>

        {/* Prev Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Banner;
