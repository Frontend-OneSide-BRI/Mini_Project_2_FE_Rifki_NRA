import React, { Component, useState, useEffect } from "react";
import Icon from "../Icon.png";

function Navbar() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [currentPage, setCurrentPage] = useState("home");

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

  useEffect(() => {
    // Mendeteksi halaman saat ini
    const path = window.location.pathname;
    if (path === "/gallery") {
      setCurrentPage("gallery");
    } else {
      setCurrentPage("home");
    }
  }, []);

  let navbarClass = "navbar navbar-expand-lg navbar-dark fixed-top";

  switch (currentPage) {
    case "home":
      if (scrollDirection === "down") {
        navbarClass += " bg-dark";
      }
      break;
    default:
      navbarClass += " bg-dark mbFix";
      break;
  }



  return (
    <nav className={navbarClass}>
      <div className="container-fluid">
        <a className="navbar-brand d-flex" href="#">
          <div className="icon">
            <img src={Icon} alt="" />
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
