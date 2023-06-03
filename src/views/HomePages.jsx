import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../store';
import Carousel  from '../components/CarouselComponent.jsx' ;
import Jumbotron  from '../components/JumbotronComponent' ;
import Category from '../components/CategoryComponent';


function Home(){
    const {images} = useContext(GlobalContext)
    return(
        <>
        <Carousel />
        <Jumbotron data = {images}/>
        <section className='pt-2 pb-3 text-center categorySection'>
            <h1>Category</h1>
            <hr className='centered-hr'/>
            <Category/>
        </section>
        </>
    )
}

export default Home