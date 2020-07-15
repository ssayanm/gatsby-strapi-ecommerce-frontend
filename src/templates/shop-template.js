import React, { useContext } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import { GlobalContext } from "../context/GlobalState"

const ShopTemplate = ({ data }) => {
  const { addItem } = useContext(GlobalContext)
  const { id, content, title, desc, price, image } = data.product
  return (
    <Layout>
      <SEO title={title} description={desc} />
      <section className="shop-template">
        <div className="section-center shop-box">
          <div className="shop-image">
            {image && <Image fluid={image.childImageSharp.fluid} />}
          </div>
          <div className="shop-content">
            <h3>{title}</h3>
            <p>${price}</p>
            <article>
              <ReactMarkdown source={content} />
            </article>
            <button
              className="btn-primary"
              onClick={() => addItem(data.product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: strapiProducts(slug: { eq: $slug }) {
      id
      content
      title
      desc
      price
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
`

export default ShopTemplate
