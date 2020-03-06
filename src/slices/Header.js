import React from 'react';
import { Link } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { linkResolver } from '../utils/linkResolver';

export default ({ slice: {primary: {logo_text, title1, sub_title, button_text} , fields} }) => (
    <header className="scroll-section main-header" data-section="main">
        <div className="main-header_nav animated">
            <nav>
                <ul>
                    {fields.map((item, index) =>
                        <li key={index}>
                            <AnchorLink to={item.nav_link_anchor} className="main-header_nav_link">{item.nav_link_text}</AnchorLink>
                        </li>
                    )}
                </ul>
            </nav>
            <Link className="logo" to="/">{logo_text}</Link>
        </div>
        <div className="main-header_slogan animated fadeIn">
            <RichText render={title1} linkResolver={linkResolver} />
            <RichText render={sub_title} linkResolver={linkResolver} />
            <button>{button_text}</button>
        </div>
    </header>
);
