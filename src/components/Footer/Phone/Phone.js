import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import useFooter from "../../../hooks/useFooter"

const Phone = () => {
  const phone = useFooter().allSanityFooter?.nodes[0]?.phone
  return (
    <div className="Info">
      <div className="imgContainer">
        <StaticImage src="../../../images/icon-phone.png" alt="phone-icon" />
      </div>
      <p>{phone}</p>
    </div>
  )
}

export default Phone

