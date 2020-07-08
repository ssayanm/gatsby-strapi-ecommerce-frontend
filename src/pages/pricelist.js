import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import Title from "../components/Title";
import ReactMarkdown from "react-markdown";
import Image from "gatsby-image";
import SEO from "../components/SEO";

const PriceList = ({
  data: {
    price: { nodes: pricelists },
  },
}) => {
  return (
    <Layout>
      <SEO title="Price List" description="price list" />
      <section className="pricelist-page">
        <Title title="Price List" />
        <div className="section-center pricelist-center">
          {pricelists.map((pricelist) => {
            const { title, info, image, id } = pricelist;
            return (
              <div className="pricelist-card" key={id}>
                <Image fluid={image.childImageSharp.fluid} />
                <div className="pricelist-text">
                  <h4>{title}</h4>
                  <ReactMarkdown source={info} />
                  <Link to="/contact" className="btn-primary center-btn">
                    contact us
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    price: allStrapiPricelists(sort: { fields: id, order: ASC }) {
      nodes {
        id
        title
        info
        image {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 600) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
    }
  }
`;

export default PriceList;
