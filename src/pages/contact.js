import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import SEO from "../components/SEO"
import { FaMobileAlt, FaEnvelope } from "react-icons/fa"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="We are All about Car Care" />
      <section className="contact-page">
        <Title title="Contact" />
        <div className="contact-block">
          <div className="contact-form">
            <h3>Get in touch</h3>
            <form action="https://formspree.io/xayppewo" method="POST">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  aria-label="name"
                  className="form-control"
                />
                <input
                  type="text"
                  placeholder="phone"
                  name="phone"
                  aria-label="phone"
                  className="form-control"
                />
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  aria-label="email"
                  className="form-control"
                />
                <textarea
                  name="message"
                  rows="5"
                  aria-label="message"
                  placeholder="message"
                  className="form-control"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn btn-primary">
                submit here
              </button>
            </form>
          </div>
          <div className="contact-address">
            <h2>Xtreme Auto Care</h2>
            <br />
            <p>
              <a href="mailto:info@xtremeautocare.ky">
                <FaEnvelope className="nav-icon" /> Email:
                info@xtremeautocare.ky
              </a>

              <br />
              <a href="tel:13455250403">
                <FaMobileAlt className="nav-icon" /> Call: (345) 525-0403
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default contact
