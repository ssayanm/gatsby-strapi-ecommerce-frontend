import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Products from "../components/Products/Products"

const AdvancedExamplePage = () => (
  <Layout>
    <SEO title="Shop" description="We are All about Car Care" />
    <section className="shop-page">
      <Products title="our shop" />
    </section>
  </Layout>
)

export default AdvancedExamplePage
