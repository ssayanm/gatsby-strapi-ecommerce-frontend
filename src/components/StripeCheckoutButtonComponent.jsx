import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = process.env.GATSBY_STRIPE_PKEY

  const onToken = token => {
    console.log(token)
    alert("Payment Succesful!")
  }

  return (
    <StripeCheckout
      label="Pay Now with Stripe"
      name="Sayan Store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
