import React from "react"
import { PortableText } from "@portabletext/react"
import "./TextBlock.scss"

function TextBlock({ subTitle, richText }) {
  return (
    <div className="textContainer">
      <div className="empty-left"></div>
      <div className="contentText">
        <h5 className="headline-small my-4">{subTitle}</h5>
        <PortableText value={richText} />
      </div>
      <div class="empty-right"></div>
    </div>
  )
}

export default TextBlock
