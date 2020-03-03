import React from 'react';

const Footer = () => (
    <footer className="main-footer">
        <div className="social">
            <a href="https://facebook.com/" className="fa-stack" target="_blank">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-facebook fa-stack-1x"></i>
            </a>
            <a href="https://twitter.com/" className="fa-stack" target="_blank">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-twitter fa-stack-1x"></i>
            </a>
            <a href="https://instagram.com/" className="fa-stack" target="_blank">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-instagram fa-stack-1x"></i>
            </a>
        </div>
        <p>Copyright@CaucasusTtrip.<br></br> All Rights Reserved. 2015</p>
    </footer>
);

export default Footer;
