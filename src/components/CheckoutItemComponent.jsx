import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import Image from "gatsby-image"

const CheckoutItemComponent = ({ cartItem }) => {
  const { title, price, image, quantity } = cartItem
  const { addItem, removeItem, clearItemFromCart } = useContext(GlobalContext)
  return (
    <div className="checkout-item">
      <div className="image-container">
        <Image fluid={image.childImageSharp.fluid} className="cart-img" />
      </div>
      <span className="name">{title}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItemComponent
