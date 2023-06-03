import React, { Component } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

function Jumbotron(props) {
const data = props.data
  return (

    <div className="container">
            {console.log(data)}
      <div className="jumbotron">
        <div className="heading mb-4">
          <h1>Welcome to My Gallery</h1>
        </div> 
        <div className="body mb-2">
        <Swiper 
        grabCursor
        breakpoints={{
            1000:{
                slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 2,
            },
          }}
        >
            {data?.map((img)=>(
                <SwiperSlide>
                <div className="container-swipper">
                <img src={img.image} alt="" />
                </div>
                </SwiperSlide>
            ))}          
          </Swiper>
        </div>
        <div className="footer">
            <a href="#" className="btn btn-dark">Show Gallery</a>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
