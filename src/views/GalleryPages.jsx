import React, { useState, useContext } from "react";
import { GlobalContext } from "../store";
import CardPicture from "../components/CardPicture";

function Gallery() {
  const { images } = useContext(GlobalContext);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  let filteredImages;
  if (selectedCategory === "all") {
    filteredImages = images;
  } else {
    filteredImages = images.filter(
      (image) => image.kategori === selectedCategory
    );
  }

  return (
    <>
      <div className="mtFix container">
        <div class="row">
          <div class="col-10 col-lg-6">
            <div class="input-group">
              <input
                class="form-control border-end-0 border"
                id="example-search-input"
                placeholder="Cari..."
              />
              <span class="input-group-append">
                <button
                  class="btn btn-outline-dark bg-white border-start-0 border-bottom-0 border ms-n5"
                  type="button"
                >
                  <i class="fa fa-search"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="navigation-kategori mb-5">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  selectedCategory === "all" ? "active text-dark" : "text-dark"
                }`}
                onClick={() => handleCategoryClick("all")}
                href="#"
              >
                All Picture
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  selectedCategory === "Music"
                    ? "active text-dark"
                    : "text-dark"
                }`}
                onClick={() => handleCategoryClick("Music")}
                href="#"
              >
                Music
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  selectedCategory === "Sport"
                    ? "active text-dark"
                    : "text-dark"
                }`}
                onClick={() => handleCategoryClick("Sport")}
                href="#"
              >
                Sport
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  selectedCategory === "Anime"
                    ? "active text-dark"
                    : "text-dark"
                }`}
                onClick={() => handleCategoryClick("Anime")}
                href="#"
              >
                Anime
              </a>
            </li>
          </ul>
        </div>
        <CardPicture data={filteredImages} />
      </div>
    </>
  );
}

export default Gallery;
