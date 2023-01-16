import React from "react"
import { Logos } from "../Logos"
import "./style.scss"


export function Footer(): React.ReactElement {
  return (
    <footer className="Footer">
      <div className="FooterWrapper">
            <Logos/>
      </div>
    </footer>
  )
}
