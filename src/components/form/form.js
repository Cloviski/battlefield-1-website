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
                                    <input data-validation="[NOTEMPTY]" id="name" name="name" className="form-text" size="20" maxlength="400" type="text" value="" placeholder="Name"/>
                                </div>
                                <div className="form-item">
                                    <input data-validation="[NOTEMPTY, EMAIL]" id="email" name="email" className="form-text" size="20" maxlength="400" type="text" value="" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="form-itemarea">
                                <textarea data-validation="[NOTEMPTY]" id="message" name="message" className="form-text" cols="40" rows="4" placeholder="Message"></textarea>
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
