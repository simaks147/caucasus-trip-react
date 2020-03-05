import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
// import { linkResolver } from '../utils/linkResolver';
import '../stylesheets/main.scss';


import Footer from "../components/Footer";

class Layout extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { data } = this.props;
        const layoutData = data.prismic.allLayouts.edges[0].node;

        return (
            <React.Fragment>
                {this.props.children}
                <Footer social_links={layoutData.social_links} copyright={layoutData.copyright} />
            </React.Fragment>
        );
    }
}

export default (props) => (
    <StaticQuery
        query={graphql`
            query MyQuery {
              prismic {
                allLayouts {
                  edges {
                    node {
                      social_links {
                        icon
                        link {
                          ... on PRISMIC__ExternalLink {
                            url
                          }
                        }
                      }
                      copyright
                    }
                  }
                }
              }
            }
         `}
        render={data => <Layout data={data} {...props} />}
    />
)
