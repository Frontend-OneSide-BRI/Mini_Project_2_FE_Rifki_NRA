import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../store';
import Carousel  from '../components/CarouselComponent.jsx' ;

function Home(){
    const {images} = useContext(GlobalContext)
    return(
        <>
        {console.log(images)}
        <Carousel />
        {images.map((img)=>(
            <>
            <p>{img.name}</p>
            </>
        ))}
        </>
    )
}

export default Home