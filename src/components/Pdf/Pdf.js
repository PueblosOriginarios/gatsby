import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import { PortableText } from "@portabletext/react";
import "./Pdf.scss";

const Pdf = ({
  data: { image, title, _rawShortDescription, link, categoryReferences },
}) => {
  return (
    <div className="Pdf">
      {image && <SanityImage {...image} alt={title} />}
      <div className="DescriptionContainer">
        <h4>{title}</h4>
        <PortableText value={_rawShortDescription} />
        {categoryReferences && (
          <div className="Categories">
            {categoryReferences?.map((ref) => {
              const category = ref?.categoryReference?.category;
              return <span className="Category">{category}</span>;
            })}
          </div>
        )}
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
