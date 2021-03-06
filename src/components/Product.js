import React, { useContext } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { GlobalContext } from "../context/GlobalState"

const Product = ({ product }) => {
  const { addItem } = useContext(GlobalContext)
  const { id, title, image, price, slug, desc } = product
  return (
    <Link to={`/products/${slug}`} key={id} className="shop">
      <article>
        <div className="image-box">
          {image && (
            <Image fluid={image.childImageSharp.fluid} className="shop-img" />
          )}
        </div>

        <div className="shop-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="shop-footer">
            <p>${price}</p>
            <button className="btn-primary" onClick={() => addItem(product)}>
              Add to cart
            </button>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Product
