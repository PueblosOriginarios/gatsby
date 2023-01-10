import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import { PortableText } from "@portabletext/react";
import "./BannerDoble.scss";

const BannerDoble = ({
  data: {
    description,
    subtitle,
    _rawContent,
    colorLeft,
    colorRight,
    image,
    button,
    buttonType,
  },
}) => {
  const bgColorImage = colorLeft === null ? "#4e7706" : colorLeft?.value;
  const bgColorText = colorRight === null ? "#4e7706" : colorRight?.value;
  const altText = description === null ? "Banner Doble" : description;

  const darkColors = ["#4e7706", "#868585", "#5A9939", "#1B1C1E", "#83b829"];
  const textColor = darkColors.includes(bgColorText) ? "light" : "dark";
  const buttonColor = darkColors.includes(bgColorText)
    ? "alternative"
    : "default";
  const subtitleIcon = subtitle?.imageIcon;
  const isExternalLink =
    button?.link?.includes("https") || button?.link?.includes("http");

  return (
    <div className='BannerDoble'>
      <div
        className='emptyLeft'
        style={{ backgroundColor: bgColorImage }}
      ></div>

      {image?.asset && (
        <div
          className='ImageContainer'
          style={{ backgroundColor: bgColorImage }}
        >
          <SanityImage {...image} alt={altText} />
        </div>
      )}

      <div
        className={`Text ${textColor}`}
        style={{ backgroundColor: bgColorText }}
      >
        <div className='TextContainer'>
          {_rawContent && (
            <PortableText value={_rawContent} style={{ color: textColor }} />
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
                className={`Button ${buttonColor}`}
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
        style={{ backgroundColor: bgColorText }}
      ></div>
    </div>
  );
};

export default BannerDoble;
