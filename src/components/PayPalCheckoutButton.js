import React from "react"
import { PayPalButton } from "react-paypal-button-v2"

const PayPalCheckoutButton = ({ price }) => {
  const priceForPayPal = price * 100

  return (
    <PayPalButton
      amount={priceForPayPal}
      // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
      onSuccess={(details, data) => {
        alert("Transaction completed by " + details.payer.name.given_name)

        // OPTIONAL: Call your server to save the transaction
        return fetch("/paypal-transaction-complete", {
          method: "post",
          body: JSON.stringify({
            orderID: data.orderID,
          }),
        })
      }}
    />
  )
}

export default PayPalCheckoutButton
