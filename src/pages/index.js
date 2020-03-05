import React from 'react';
import {graphql} from 'gatsby';
import { RichText } from 'prismic-reactjs';

import Layout from '../layouts';
import {Helmet} from "react-helmet";
import Slices from "../slices";


export const query = graphql`
{
  prismic {
    allHomes {
      edges {
        node {
          title
          _linkType
          body {
            ... on PRISMIC_HomeBodyHeader {
              type
            }
          }
        }
      }
    }
  }
}
`;

export default ({ data }) => {
    // Required check for no data being returned
    const doc = data.prismic.allHomes.edges.slice(0,1).pop();
    if(!doc) return null;


    return (
        <Layout>
            {console.log(doc.node)}
            <Helmet>
                <title>{RichText.asText(doc.node.title)}</title>
            </Helmet>
            <Slices slices={doc.node.body} />
        </Layout>
    );
}
