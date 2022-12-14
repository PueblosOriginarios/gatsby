import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import useFooter from "../../../hooks/useFooter"

const Location = () => {
  const address = useFooter().allSanityFooter?.nodes[0]?.address
  return (
    <div className="Info">
      <div className="imgContainer">
        <StaticImage src="../../../images/icon-location.png" alt="location-icon" />
      </div>
      <p>{address}</p>
    </div>
  )
}

export default Location
