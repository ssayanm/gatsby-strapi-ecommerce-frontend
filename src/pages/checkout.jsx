import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import { getCartTotal } from "../utils/cartUtils"
import CheckoutItemComponent from "../components/CheckoutItemComponent"
import StripeCheckoutButton from "../components/StripeCheckoutButtonComponent"
import PayPalCheckoutButton from "../components/PayPalCheckoutButton"
import Layout from "../components/Layout"
import Title from "../components/Title"
import SEO from "../components/SEO"

const CheckoutPage = () => {
  const { cartItems } = useContext(GlobalContext)
  return (
    <Layout>
      <SEO title="Checkout Page" description="We are All about Car Care" />
      <section className="section">
        <Title title="Checkout" />
        <div className="checkout-page">
          <div className="checkout-header">
            <div className="header-block">
              <span>Product</span>
            </div>
            <div className="header-block">
              <span>Description</span>
            </div>
            <div className="header-block">
              <span>Quantity</span>
            </div>
            <div className="header-block">
              <span>Price</span>
            </div>
            <div className="header-block">
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map(cartItem => (
            <CheckoutItemComponent key={cartItem.id} cartItem={cartItem} />
          ))}
          <div className="total">TOTAL: ${getCartTotal(cartItems)}</div>
          <div className="test-warning">
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
          </div>
          <StripeCheckoutButton price={getCartTotal(cartItems)} />
          <PayPalCheckoutButton price={getCartTotal(cartItems)} />
        </div>
      </section>
    </Layout>
  )
}

export default CheckoutPage
