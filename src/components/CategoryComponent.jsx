import React, { Component } from 'react';

function Category() {
    return ( 
        <div className="d-flex justify-content-around flex-wrap">
                <section id="artist">
                    <div className="img-kategori mb-3">
                        <img src="assets/img/artist/kategori.jpg" className="" alt="..." width="" />
                        <div className="overlay">
                            <p>MUSIC</p>
                        </div>
                    </div>
                </section>
                <section id="artist">
                    <div className="img-kategori mb-3">
                        <img src="assets/img/atlet/kategori.webp" className="" alt="..." width="" />
                        <div className="overlay">
                            <p>SPORT</p>
                        </div>
                    </div>

                </section>
                <section id="artist">
                    <div className="img-kategori mb-3">
                        <img src="assets/img/anime/kategori.jpeg" className="" alt="..." width="" />
                        <div className="overlay">
                            <p>ANIME</p>
                        </div>
                    </div>
                </section>
            </div>
     );

}

export default Category;