import React, { useReducer, createContext } from "react"
import AppReducer from "./AppReducer"
// import SHOP_DATA from "./ShopData"
// import DIRECTORY_DATA from "./DirectoryData"

//initial State
const initialState = {
  // collections: SHOP_DATA,
  // directory: DIRECTORY_DATA,
  cartItems: [],
  hidden: true,
}

//Create Context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions

  const toggleCartHidden = () =>
    dispatch({
      type: "TOGGLE_CART_HIDDEN",
    })

  const addItem = item =>
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    })

  const removeItem = item =>
    dispatch({
      type: "REMOVE_ITEM",
      payload: item,
    })

  const clearItemFromCart = item =>
    dispatch({
      type: "CLEAR_ITEM_FROM_CART",
      payload: item,
    })

  return (
    <GlobalContext.Provider
      value={{
        // collections: state.collections,
        // directory: state.directory,
        cartItems: state.cartItems,
        hidden: state.hidden,
        // cartTotal: state.cartTotal,
        addItem,
        removeItem,
        toggleCartHidden,

        clearItemFromCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
export default ({ element }) => <GlobalProvider>{element}</GlobalProvider>
