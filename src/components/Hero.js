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
            <h1>Xtreme Auto Care</h1>
            <h4>
              Auto Detailing Service
              <br />
              Premium Mobile Car Wash in Cayman Islands
            </h4>
            <div className="phone">
              <a href="tel:13455250403">
                <FiPhoneCall className="phone-icon" /> Call (345) 525-0403
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
