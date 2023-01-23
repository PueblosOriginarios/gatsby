import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import { PortableText } from "@portabletext/react";
import "./BannerDoble.scss";

const BannerDoble = ({
  data: {
    description,
    subtitle,
    _rawContent,
    bgColorBanner,
    image,
    button,
    buttonType,
    imageDescription
  },
}) => {
  const altText = description === null ? "Banner Doble" : description;

  const subtitleIcon = subtitle?.imageIcon;
  const isExternalLink =
    button?.link?.includes("https") || button?.link?.includes("http");

  return (
    <div className='BannerDoble'>
      <div
        className='emptyLeft'
        style={{ backgroundColor: bgColorBanner?.value }}
      ></div>

      {image?.asset && (
        <div
          className='ImageContainer'
          style={{ backgroundColor: bgColorBanner?.value }}
        >
          <SanityImage {...image} alt={altText} />
          {imageDescription && <div className='ImageDescription'>{imageDescription}</div>}
        </div>
      )}

      <div className='Text' style={{ backgroundColor: bgColorBanner?.value }}>
        <div className='TextContainer'>
          {_rawContent && (
            <PortableText value={_rawContent} style={{ color: "#1b1c1e" }} />
          )}
          {subtitleIcon && (
            <div className='Subtitle'>
              <SanityImage
                {...subtitleIcon}
                alt='Icon Image'
                loading='eager'
                className='Icon'
              />
              <span className='Content'> {subtitle?.description}</span>
            </div>
          )}

          {button?.link &&
            (buttonType === "button" ? (
              <a
                href={button?.link}
                rel='noreferrer'
                className='Button'
                target={isExternalLink ? "_blank" : ""}
              >
                <small>{button?.nameButton}</small>
              </a>
            ) : (
              <a
                href={button?.link}
                rel='noreferrer'
                className={`Link mt-4`}
                target={isExternalLink ? "_blank" : ""}
              >
                <small className='label-large'>{button?.nameButton}</small>
              </a>
            ))}
        </div>
      </div>
      <div
        className='emptyRight'
        style={{ backgroundColor: bgColorBanner?.value }}
      ></div>
    </div>
  );
};

export default BannerDoble;
