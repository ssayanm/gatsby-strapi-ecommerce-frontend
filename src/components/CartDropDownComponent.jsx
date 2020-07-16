import React, { useContext } from "react"
// import { withRouter } from "react-router-dom"
import { GlobalContext } from "../context/GlobalState"
import CartItemComponent from "./CartItemComponent"

const CartDropDownComponent = ({ history }) => {
  const { cartItems, toggleCartHidden } = useContext(GlobalContext)
  return (
    <div className="cart-dropdown">
      {console.log(history)}
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
          history.push("/checkout")
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
