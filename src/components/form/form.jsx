import React from 'react'
import './styles.css'
import Dice from '../../assets/dicelogo.png'

function Form() {
    return (
        <section id='contact'>
                <div className="contact-container">
                    <div className="logo-company"><center><img className="dicelogo" src={Dice} alt=''/></center>
                        <h2>
                            contactㅤ
                            <span className="dicename">ㅤEA Digital Illusion CE AB</span>
                        </h2>
                        <form id="SupportForm" name="SupportForm" className="support-form" action="/" method="POST">
                            <div className="line">
                                <div className="form-item">
                                    <input id="name" name="name" className="form-text" type="text" placeholder="Name"/>
                                </div>
                                <div className="form-item">
                                    <input id="email" name="email" className="form-text" type="text" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="form-itemarea">
                                <textarea id="message" name="message" className="form-text" placeholder="Message"></textarea>
                            </div>
                            <div className="form-itemsubmit"> 
                                <input id="submitButton" name="submitButton" className="form-submit button" value="Submit message" type="submit"/>
                            </div>
                        </form>
                    </div>
                </div>
        </section>
    )
}

export default Form
