import React, { useReducer, createContext } from "react"
import AppReducer from "./src/context/AppReducer"
import { graphql, useStaticQuery } from "gatsby"
// import axios from "axios";
// import SHOP_DATA from "./ShopData";
// import DIRECTORY_DATA from "./DirectoryData";

const {
  data: {
    allStrapiProducts: { nodes: products },
  },
} = useStaticQuery(query)

//initial State
const initialState = {
  cartItems: [],
  hidden: true,
}

//Create Context
export const GlobalContext = createContext(initialState)

// Provider component
export const Provider = ({ children }) => {
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

  const removeItem = item => ({
    type: "REMOVE_ITEM",
    payload: item,
  })

  const getCartTotal = item =>
    dispatch({
      type: "GET_CART_TOTAL",
      payload: item,
    })

  return (
    <GlobalContext.Provider
      value={{
        cartItems: state.cartItems,
        hidden: state.hidden,
        addItem,
        removeItem,
        toggleCartHidden,
        getCartTotal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const query = graphql`
  {
    allStrapiProducts {
      nodes {
        slug
        desc
        price
        id
        title
        image {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 600) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
    }
  }
`

export default ({ element }) => <Provider>{element}</Provider>
