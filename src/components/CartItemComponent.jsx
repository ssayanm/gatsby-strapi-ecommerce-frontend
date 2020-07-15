import React from "react"

const CartItemComponent = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem
  return (
    <div className="container section">
      <img className="" src={imageUrl} alt={name} />
      <div className="">
        <span className=""> {name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}

export default CartItemComponent
