import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Instapics from "../components/Instapics";
import SEO from "../components/SEO";

export default ({ data: { allInstaNode } }) => {
  return (
    <Layout>
      <SEO title="Home" description="Xtreme Auto Care" />
      <Hero />
      <Services />
      <Instapics instapics={allInstaNode} showLink />
    </Layout>
  );
};

export const query = graphql`
  {
    allInstaNode(limit: 9, sort: { fields: likes, order: DESC }) {
      edges {
        node {
          id
          username
          likes
          caption
          localFile {
            childImageSharp {
              fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
