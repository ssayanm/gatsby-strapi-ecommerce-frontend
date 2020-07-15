import React from "react"
import Image from "gatsby-image"

const CartItemComponent = ({ cartItem }) => {
  const { title, price, image, quantity } = cartItem
  return (
    <div className="cart-item">
      <Image fluid={image.childImageSharp.fluid} className="cart-img" />
      <div className="item-details">
        <span className="name">{title}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}

export default CartItemComponent
