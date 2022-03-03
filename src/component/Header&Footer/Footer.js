import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div class="footer">
                <div class="footComponent1">
                    <div className="footer__aboutus">
                        <h5>About</h5>
                    </div>
                    <div className="footer__contact">
                        <h5>Contact</h5>
                    </div>
                    <div className="footer__feedback">
                        <h5>Feedback</h5>
                        <input type="text" placeholder=""></input>
                        <button className = "feedback">Submit</button>
                    </div>
                </div>
                <div class="footComponent2">
                    <div className="footer2">
                        <div className = "footer2__left"></div>
                            <p className = "words">Privacy</p>
                            <p className = "words">Terms</p>
                            <p className = "words">Security</p>
                        </div>
                        <div className = "footer2__right">
                            <img className = "footer__logo" src="https://www.flaticon.com/svg/static/icons/svg/1384/1384015.svg" alt="fb" />
                            <img className = "footer__logo" src="https://www.flaticon.com/svg/static/icons/svg/1384/1384005.svg" alt="fb"/>
                            <img className = "footer__logo" src="https://www.flaticon.com/svg/static/icons/svg/1384/1384012.svg" alt="fb"/>
                            <img className = "footer__logo" src = "https://www.flaticon.com/svg/static/icons/svg/1384/1384017.svg"alt="fb"/>  
                        </div>
                    </div>
                <div className = "footComponent3">
                    <h4 style={{ color: "antiquewhite", fontSize: "18px" }}> © 2020 Copyright :<span class="developer">Suraj</span></h4>
                </div>
            </div>   
        </div>
    )
}

export default Footer;

