import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Products from "../components/Products"
import SEO from "../components/SEO"

const Shop = ({
  data: {
    allStrapiProducts: { nodes: products },
  },
}) => {
  return (
    <Layout>
      <SEO title="Shop" description="We are All about Car Care" />
      <section className="shop-page">
        <Products products={products} title="our shop" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProducts {
      nodes {
        slug
        desc
        price
        id
        title
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
`

export default Shop
