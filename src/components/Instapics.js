import React from "react";
import Title from "./Title";
import Instapic from "./Instapic";
import { Link } from "gatsby";
export const Instapics = ({ instapics, showLink }) => {
  return (
    <section className="section instag">
      <Title title="Instagram Gallery" />

      <div className="instagram-center">
        {instapics.edges.map((instapic) => {
          return <Instapic key={instapic.node.id} instapic={instapic.node} />;
        })}
      </div>

      {showLink && (
        <Link
          to="https://www.instagram.com/xtreme_auto_care_345/"
          target="_blank"
          className="btn-primary center-btn"
        >
          follow us
        </Link>
      )}
    </section>
  );
};
export default Instapics;
