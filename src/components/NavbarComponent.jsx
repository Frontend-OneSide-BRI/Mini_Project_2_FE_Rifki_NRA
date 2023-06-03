import React, { Component, useState, useEffect } from "react";
import Icon from '../Icon.png'

function Navbar() {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0) {
        setScrollDirection("down");
      } else if (currentScrollY === 0) {
        setScrollDirection("up");
      }
    };

    //mount
    window.addEventListener("scroll", handleScroll);

    //unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection]);

  const navbarClass = `navbar navbar-expand-lg fixed-top ${
    scrollDirection === "down"
      ? "navbar-dark bg-dark"
      : "navbar-dark bg-semi-dark"
  }`;

  return (
    <nav className={navbarClass}>
      <div className="container-fluid">
        <a className="navbar-brand d-flex" href="#">
          <div className="icon">
          <img src={Icon} alt=""/>
          </div>
          <span className="mt-2 fs-4">My Gallery</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Gallery
            </a>
            {/*  Button modal*/}
            <button
              type="button"
              className="nav-link"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
