import React, { Component, useState, useEffect } from "react";

function Navbar() {
  const [scrollDirection, setScrollDirection] = useState("down");

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
    scrollDirection === "down" ? "navbar-dark bg-dark" : "navbar-light bg-transparant"
  }`;

  return (
    <nav className={navbarClass}>
        {console.log(setScrollDirection)}
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
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
            <a className="nav-link" href="#">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
