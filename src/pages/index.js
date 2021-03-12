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
              primary {
                logo_text
                title1
                sub_title
                button_text
              }
              fields {
                nav_link_text
                nav_link_anchor
              }
            }
            ... on PRISMIC_HomeBodyIntro {
              type
              primary {
                title1
                text
                image
                data_section_attr
              }
            }
            ... on PRISMIC_HomeBodyDestination_summary {
              type
              primary {
                data_section_attr
                text
                title1
              }
            }
            ... on PRISMIC_HomeBodyDestination_select {
              type
              label
              primary {
                caption1
                caption2
                caption3
                caption4
                data_pic_attr1
                data_pic_attr2
                data_pic_attr3
                data_pic_attr4
                image1
                image2
                image3
                image4
              }
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
            <Helmet>
                <title>{RichText.asText(doc.node.title)}</title>
            </Helmet>
            <Slices slices={doc.node.body} />
        </Layout>
    );
}
