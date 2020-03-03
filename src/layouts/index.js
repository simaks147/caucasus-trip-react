import React from'react';
// import { Link, StaticQuery, graphql } from 'gatsby';
// import { linkResolver } from '../utils/linkResolver';
// import { Helmet } from 'react-helmet';

import Header from '../components/Header';

import '../stylesheets/main.scss';
import Footer from "../components/Footer";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="l-wrap">
                    <Header/>
                    <main className="c-main">
                        {this.props.children}
                    </main>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}
