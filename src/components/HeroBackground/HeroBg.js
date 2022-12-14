import React from "react"
import SanityImage from "gatsby-plugin-sanity-image"

import "./HeroBg.scss"

const HeroBg = ({ data }) => {
  const image = data?.heroVisitant?.imageHeroBg

  return (
    <div className="heroBg">
      <div className="bgImage">
        <div className="contentText">
          {image && (
            <div className="imageText">
              <SanityImage {...image} alt="Image Visitants" />
            </div>
          )}
          <h5 className="headline-small">{data?.heroVisitant?.titleHeroBg}</h5>
        </div>
        <div className="empty-right"></div>
      </div>
    </div>
  )
}

export default HeroBg
