import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Product = ({ id, title, image, price, slug, desc }) => {
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
            <button
              className="snipcart-add-item btn-primary"
              data-item-id={id}
              data-item-price={price}
              data-item-url={`/products/${slug}`}
              data-item-description={desc}
              data-item-image={image.childImageSharp.fluid.src}
              data-item-name={title}
            >
              Add to cart
            </button>
          </div>
        </div>
      </article>
    </Link>
  )
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default Product