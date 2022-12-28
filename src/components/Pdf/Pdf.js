import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import { PortableText } from "@portabletext/react";
import "./Pdf.scss";

const Pdf = ({ data: { image, title, _rawShortDescription, link, category } }) => {
  return (
    <div className="Pdf">
      {image && <SanityImage {...image} alt={title} />}
      <div className="DescriptionContainer">
        <h4>{title}</h4>
        <PortableText value={_rawShortDescription} />
        {link && (
          <a
            className="Button"
            href={link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <small>Descargar PDF</small>
          </a>
        )}
      </div>
    </div>
  );
};

export default Pdf;
