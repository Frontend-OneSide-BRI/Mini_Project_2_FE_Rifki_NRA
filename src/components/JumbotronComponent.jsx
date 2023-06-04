import React, { Component } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

function Jumbotron(props) {
const data = props.data
  return (

    <div className="container-fluid">
      <div className="jumbotron p-4">
        <div className="heading mb-4">
          <h1>Welcome to My Gallery</h1>
        </div> 
        <div className="body mb-2">
        <Swiper 
        grabCursor
        breakpoints={{
            1000:{
                slidesPerView: 5,
            },
            768: {
              slidesPerView: 3,
            },
            350: {
              slidesPerView: 2,
            },
          }}
        >
            {data?.map((img)=>(
                <SwiperSlide  key={img.id}>
                <div className="container-swipper">
                <img src={img.image} alt="" />
                </div>
                </SwiperSlide>
            ))}          
          </Swiper>
        </div>
        <div className="footer">
            <a href="/gallery" className="btn btn-dark fs-5 px-4">Show Gallery</a>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
