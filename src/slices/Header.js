import React from 'react';

const Header = () => (
    <header className="scroll-section main-header" data-section="main">
        <div className="main-header_nav animated">
            <nav>
                <ul>
                    <li>
                        <a className="main-header_nav_link" href="#intro">Home</a>
                    </li>
                    <li>
                        <a className="main-header_nav_link" href="#destination_summary">Destination</a>
                    </li>
                    <li>
                        <a className="main-header_nav_link" href="#destination_info">Review</a>
                    </li>
                    <li>
                        <a className="main-header_nav_link" href="#set-ittinery">Ittinery</a>
                    </li>
                    <li>
                        <a className="main-header_nav_link" href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <a href="" className="logo">Caucasus<i>Ttrip</i></a>
        </div>
        <div className="main-header_slogan animated fadeIn">
            <h1>Lets get <b>lost</b></h1>
            <p>An incredible sense of freedom<br></br>and truth merge with the beauty of nature are waiting for you</p>
            <button>Set ittinery now</button>
        </div>
    </header>
);

export default Header;
