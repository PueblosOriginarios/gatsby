import SanityImage from "gatsby-plugin-sanity-image"
import React from "react"
import { PortableText } from "@portabletext/react"
import "./DualAsymmetric.scss"

const DualAsymmetric = ({
  data: {
    title,
    _rawRichTextDualA,
    description,
    colorLeft,
    colorRight,
    image,
    imageSide,
    button,
  },
}) => {
  const bgColorImage =
    imageSide === "left" ? colorLeft?.value : colorRight?.value
  const bgColorText =
    imageSide === "left" ? colorRight?.value : colorLeft?.value

  const darkColors = ["#4e7706", "#868585", "#1B1C1E"]
  const textColor = darkColors.includes(bgColorText) ? "#FCFCFC" : "#1B1C1E"
  const buttonColor = darkColors.includes(bgColorText)
    ? "alternative"
    : "default"

  const altText = description === null ? "Banner Dual Asimetric" : description

  return (
    <div className={`DualAsymmetric ${imageSide}`}>
      <div className="emptyLeft" style={{ backgroundColor: bgColorImage }}></div>
      {image && (
        <div
          className={`ImageContainer ${imageSide}`}
          style={{ backgroundColor: bgColorImage }}
        >
          <SanityImage {...image} alt={altText} />
        </div>
      )}
      <div className={`TextContainer ${imageSide}`} style={{ backgroundColor: bgColorText }}>
        {(title || _rawRichTextDualA) && (
          <>
            <h4 className="Title" style={{ color: textColor }}>
              {title}
            </h4>
            <PortableText value={_rawRichTextDualA} className="Content" />
          </>
        )}
        {button?.link && (
          <a
            href={button?.link}
            rel="noreferrer"
            className={`Button ${buttonColor} ${bgColorText}`}
          >
            <small>{button?.nameButton}</small>
          </a>
        )}
      </div>
      <div className={`emptyRight ${imageSide}`} style={{ backgroundColor: bgColorText }}></div>
    </div>
  )
}

export default DualAsymmetric
