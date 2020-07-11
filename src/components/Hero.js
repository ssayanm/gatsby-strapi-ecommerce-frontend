import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { FiPhoneCall } from "react-icons/fi"
import Slider from "react-animated-slider"
import "react-animated-slider/build/horizontal.css"

const Hero = () => {
  const {
    allStrapiSliders: { nodes: sliders },

    // file: {
    //   childImageSharp: { fluid },
    // },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="container hero-center">
        <article className="hero-info">
          <div>
            <div className="underline" />
            <h3>Welcome to</h3>
            <h1>Sayan's store</h1>
            <h4>
              One stop solution for all
              <br />
              Premium Clothing Brands
            </h4>
            <div className="phone">
              <a href="tel:13455250403">
                <FiPhoneCall className="phone-icon" /> Call (91) 111-222-333
              </a>
            </div>
            <Link to="/contact" className="btn-primary">
              contact us
            </Link>
            <SocialLinks />
          </div>
        </article>

        <Slider classNames="slider" autoplay={4000}>
          {sliders.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url('${item.slide.childImageSharp.fluid.src}')`,
                  backgroundPosition: `center center`,
                  backgroundSize: `cover`,
                }}
              ></div>
            )
          })}
        </Slider>
      </div>
    </header>
  )
}

export const query = graphql`
  {
    allStrapiSliders {
      nodes {
        slide {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

export default Hero
