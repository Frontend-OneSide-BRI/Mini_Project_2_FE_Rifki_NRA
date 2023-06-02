import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../store';

function Home(){
    const {images} = useContext(GlobalContext)
    return(
        <>
        {console.log(images)}
        <h1>Hello World</h1>
        {images.map((img)=>(
            <>
            <p>{img.name}</p>
            </>
        ))}
        </>
    )
}

export default Home