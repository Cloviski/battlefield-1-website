import React from 'react'
import Cards from '../../components/cards/cards';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header'
import Trailer from '../../components/trailer/index';
import './styles.css'

function Home(){

    return (
        <>
            <Header />
            <div className='banner-menu'></div>
            <Trailer />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;