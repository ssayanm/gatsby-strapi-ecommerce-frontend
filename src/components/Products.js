import React from "react"
import Title from "./Title"
import Product from "./Product"
import { Link } from "gatsby"
export const Products = ({ products, title, showLink }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center shop-center">
        {products.map(product => {
          return <Product key={product.id} {...product} />
        })}
      </div>
      {showLink && (
        <Link to="/shop" className="btn center-btn">
          shop
        </Link>
      )}
    </section>
  )
}
export default Products
