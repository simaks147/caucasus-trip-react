import React from 'react';
import { Link } from 'prismic-reactjs';
import { linkResolver } from '../utils/linkResolver';

export default ({ social_links, copyright }) => (
    <footer className="main-footer">
        <div className="social">
            {social_links.map((item, index) =>
                <a href={Link.url(item.link, linkResolver)} className="fa-stack" target="_blank" rel="noopener noreferrer" key={index}>
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className={`fa ${item.icon} fa-stack-1x`}></i>
                </a>
            )}
        </div>
        <p>{copyright}</p>
    </footer>
);
