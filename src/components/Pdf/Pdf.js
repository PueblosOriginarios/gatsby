import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import { PortableText } from "@portabletext/react";
import "./Pdf.scss";

const Pdf = ({ data }) => {
  console.log(data);
  console.log(data?.title);
  return (
    <div className='Pdf'>
      {data?.image !== null && data?.image !== undefined && (
        <SanityImage {...data?.image} alt={data?.title} />
      )}
      <div className='DescriptionContainer'>
        <h4>{data?.title}</h4>
        <PortableText value={data?._rawShortDescription} />
        {data?.categoryReferences && (
          <div className='Categories'>
            {data?.categoryReferences?.map((ref) => {
              const category = ref?.categoryReference?.category;
              return <span className='Category'>{category}</span>;
            })}
          </div>
        )}
        {data?.link && (
          <a
            className='Button'
            href={data?.link}
            target='_blank'
            rel='noreferrer noopener'
          >
            <small>Descargar PDF</small>
          </a>
        )}
      </div>
    </div>
  );
};

export default Pdf;
