import React, { useState } from "react"
import getStripe from "../../utils/stripejs"
import Image from "gatsby-image"

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)

    const price = new FormData(event.target).get("priceSelect")
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price, quantity: 1 }],
      successUrl: `${window.location.origin}/page-2/`,
      cancelUrl: `${window.location.origin}/advanced`,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  return (
    <div className="stripe-card">
      <article>
        <form onSubmit={handleSubmit}>
          <div className="image-box">
            <img src={product.images} className="stripe-img" />
          </div>

          <div className="shop-card">
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <div className="shop-footer">
              <p name="priceSelect">
                {product.prices.map(price => {
                  return (
                    <option key={price.id} value={price.id}>
                      {formatPrice(price.unit_amount, price.currency)}
                    </option>
                  )
                })}
              </p>

              <button disabled={loading} className="btn-primary">
                Add to cart
              </button>
            </div>
          </div>
        </form>
      </article>
    </div>
  )
}

export default ProductCard
