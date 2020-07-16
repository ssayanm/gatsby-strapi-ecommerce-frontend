import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const CheckoutItemComponent = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem
  const { addItem, removeItem, clearItemFromCart } = useContext(GlobalContext)
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
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
