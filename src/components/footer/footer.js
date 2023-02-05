import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'
import Ea from '../../assets/ealogo.png'
import Dice from '../../assets/dicelogo.png'
import Frostbite from '../../assets/frostbitelogo.png'

function Footer() {
    return (
        <>
            <footer>
                <div className="logo company">
                    <img className="logo ea" src={Ea} alt=''/>
                    <img className="logo dice" src={Dice} alt=''/>
                    <img className="logo frostbite" src={Frostbite} alt=''/>
                </div>
                <span>All rights reserved. ©</span>
                <span>Developed by: Cláudio Ribeiro</span>

                <nav className="footer-navigation">
                    <ul className="footer-list">
                        <Link style={{ textDecoration: 'none'}} to='/'>
                            <li>HOME</li>
                        </Link>

                        <Link style={{ textDecoration: 'none'}}  to='/contact'>
                            <li>CONTACT</li>
                        </Link>

                        <Link style={{ textDecoration: 'none'}}  to='/photos'>
                            <li>PICTURES</li>
                        </Link>
                    </ul>
                </nav>
            </footer>
        </>
    )
}

export default Footer

