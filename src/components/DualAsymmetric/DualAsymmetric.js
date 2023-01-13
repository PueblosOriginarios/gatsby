import SanityImage from "gatsby-plugin-sanity-image";
import React from "react";
import { PortableText } from "@portabletext/react";
import "./DualAsymmetric.scss";
import ReactAudioPlayer from "react-audio-player";

const DualAsymmetric = ({
  data: {
    title,
    _rawRichTextDualA,
    description,
    bgColor,
    image,
    imageSide,
    button,
    urlAudio,
  },
}) => {
  const altText = description === null ? "Banner Dual Asimetric" : description;

  return (
    <div className={`DualAsymmetric ${imageSide}`}>
      <div
        className='emptyLeft'
        style={{ backgroundColor: bgColor?.value }}
      ></div>
      {image && (
        <div
          className={`ImageContainer ${imageSide}`}
          style={{ backgroundColor: bgColor?.value }}
        >
          <SanityImage {...image} alt={altText} />
        </div>
      )}
      <div
        className={`TextContainer ${imageSide}`}
        style={{ backgroundColor: bgColor?.value }}
      >
        {(title || _rawRichTextDualA) && (
          <>
            <h4 className='Title'>{title}</h4>
            <PortableText value={_rawRichTextDualA} className='Content' />
          </>
        )}
        <div className={`ButtonAudioContainer`}>
          {button?.link && (
            <a href={button?.link} rel='noreferrer' className={`Button`}>
              <small>{button?.nameButton}</small>
            </a>
          )}
          {urlAudio && <ReactAudioPlayer src={urlAudio?.asset?.url} controls />}
        </div>
      </div>
      <div
        className={`emptyRight ${imageSide}`}
        style={{ backgroundColor: bgColor?.value }}
      ></div>
    </div>
  );
};

export default DualAsymmetric;
