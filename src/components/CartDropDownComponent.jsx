import React, { useContext } from "react"
// import { withRouter } from "react-router-dom"
import { GlobalContext } from "../context/GlobalState"
import CartItemComponent from "./CartItemComponent"

import { navigate } from "gatsby"

const CartDropDownComponent = () => {
  const { cartItems, toggleCartHidden } = useContext(GlobalContext)
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItemComponent key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <button
        className="btn-primary"
        onClick={() => {
          navigate("/checkout")
          toggleCartHidden()
        }}
      >
        Go to Checkout
      </button>
    </div>
  )
}

export default CartDropDownComponent
// export default withRouter(CartDropDownComponent)
