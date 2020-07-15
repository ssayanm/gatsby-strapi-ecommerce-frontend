import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
} from "../utils/cartUtils"

export default (state, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      }

    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      }

    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      }

    case "CLEAR_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: filterItemFromCart(state.cartItems, action.payload),
      }

    default:
      return state
  }
}
