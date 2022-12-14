import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import useFooter from "../../../hooks/useFooter"

const Email = () => {
  const email = useFooter().allSanityFooter?.nodes[0]?.email
  return (
    <div className="Info">
      <div className="imgContainer">
        <StaticImage src="../../../images/icon-mail.png" alt="email-icon" />
      </div>
      <p>{email}</p>
    </div>
  )
}

export default Email
