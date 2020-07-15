import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
// import { GlobalContext } from "../context/GlobalState"
// import { getCartItemsCount } from "../utils/cartUtils"

const CartIconComponent = () => {
  const {
    file: { publicURL },
  } = useStaticQuery(query)

  // const { toggleCartHidden, cartItems } = useContext(GlobalContext)

  return (
    <div className="cart-icon">
      <img src={publicURL} alt="logoicon" />

      <span className="count"> 11</span>
    </div>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "shopping-bag.svg" }) {
      publicURL
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          src
        }
      }
    }
  }
`

export default CartIconComponent
