import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";

const Instapic = ({ instapic }) => {
  return (
    <div className="intagram-feed">
      <Link to={`https://www.instagram.com/p/${instapic.id}`} target="_blank">
        <Image
          fluid={instapic.localFile.childImageSharp.fluid}
          className="instagram-img"
        />
      </Link>
    </div>
  );
};

export default Instapic;
