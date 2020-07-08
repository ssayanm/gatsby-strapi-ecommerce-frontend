import React from "react";
import Title from "./Title";
import services from "../constants/services";
import SocialLinks from "../constants/socialLinks";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import Image from "gatsby-image";

const Services = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);
  return (
    <section className="container section services">
      <div className="info">
        <Image fluid={fluid} className="info-img" />
        <div className="para">
          <h3>A better Business means better Client experience</h3>
          <p>
            Mollitia placeat modi explicabo voluptatum corporis unde? Dicta,
            provident! Rem adipisci Mollitia placeat modi explicabo voluptatum
            corporis unde? Dicta, provident! Rem adipisci consectetur
            adipisicing elit. Deleniti possimus culpa nemo asperiores aperiam
            mollitia, maiores fugiat tempor Vero est aliquid nisi fugit. Placeat
            modi explicabo voluptatum corporis unde? Dicta, provident! Rem
            adipisci consectetur adipisicing elit. Deleniti possimus culpa nemo
            asperiores aperiam mollitia, maiores
          </p>
        </div>
      </div>
      <Title title="our services" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, text, url } = service;
          return (
            <Link to={url} key={id} className="service">
              <article>
                {icon}
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            </Link>
          );
        })}
      </div>

      <SocialLinks />
    </section>
  );
};

export const query = graphql`
  {
    file(relativePath: { eq: "xtremeautocarevan.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Services;
