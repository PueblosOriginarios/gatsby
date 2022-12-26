import React from "react"
import SanityImage from "gatsby-plugin-sanity-image"
import "./Banner.scss"

const Banner = ({ data: { title, description, color, image } }) => {
  const textColor = color?.value === "#FCFCFC" ? "#1B1C1E" : "#FCFCFC"
  const showText = image === null ? true : undefined
  const bgColor = color === null ? "#4e7706" : color?.value
  const altText = description === null ? "Banner" : description

  return (
    <div className="Banner" style={{ backgroundColor: bgColor }}>
      {image && (
        <div className="ImageContainer">
          <SanityImage {...image} alt={altText} className="ImageWrapper" />
        </div>
      )}
      {showText && (
        <p className="Title" style={{ color: textColor }}>
          {title}
        </p>
      )}
    </div>
  )
}

export default Banner
