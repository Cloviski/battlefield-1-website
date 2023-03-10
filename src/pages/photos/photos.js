import React from 'react'
import Maps from '../../components/footage/footage'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import './styles.css'


function Photos(){
    return (
        <>
            <Header />
            <div className='banner-pictures'>
                <h1 className='text pictures-1'>FOOTAGE</h1>
            </div>
            <Maps />
            <Footer />
        </>
    )
}

export default Photos