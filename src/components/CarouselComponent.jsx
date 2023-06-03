import React, { Component } from "react";

function Carousel() {
  return (
    <div className="slider">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <div className="img">
              <img
                src="assets/img/artist/slider-artis (2).jpg"
                className="d-block w-100"
                alt="..."
                width=""
              />
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="img">
              <img
                src="assets/img/atlet/slider-ronaldo.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="img">
              <img
                src="assets/img/anime/boruto-slider.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previhous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
