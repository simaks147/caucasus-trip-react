import React from 'react';
import {graphql} from 'gatsby';
import { RichText } from 'prismic-reactjs';

import Layout from '../layouts';
import {Helmet} from "react-helmet";
// import Slices from "../slices";


export const query = graphql`
query TripsQuery($uid: String) {
  prismic {
    allTrips(uid: $uid) {
      edges {
        node {
          title
        }
      }
    }
  }
}
`;

export default ({ data }) => {
    // Required check for no data being returned
    const doc = data.prismic.allTrips.edges.slice(0,1).pop();
    if(!doc) return null;

    return (
        <Layout>
            <Helmet>
                <title>{RichText.asText(doc.node.title)}</title>
            </Helmet>
            <div>{RichText.asText(doc.node.title)}</div>
        </Layout>
    );
}
