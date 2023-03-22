import React from 'react'
import './styles.css'
import Ea from '../../assets/ealogo.png'
import Dice from '../../assets/dicelogo.png'
import Frostbite from '../../assets/frostbitelogo.png'

function Footer() {
    return (
        <footer>
            <div className="logo company">
                <img className="logo ea" src={Ea} alt=''/>
                <img className="logo dice" src={Dice} alt=''/>
                <img className="logo frostbite" src={Frostbite} alt=''/>
            </div>
            <span>All rights reserved. ©</span>
            <span>Developed by: Cláudio Ribeiro</span>
        </footer>
    )
}

export default Footer

