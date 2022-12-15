import React from "react"
import Location from "./Location/Location"
import Phone from "./Phone/Phone"
import Email from "./Email/Email"
import "./style.scss"

export function Footer(): React.ReactElement {
  return (
    <footer className="Footer">
      <div className="FooterWrapper">
        <div className="Contacto">
          <h5 className="Title">Contactanos</h5>
          <div className="Contactos">
            <Email />
            <Phone />
            <Location />
          </div>
        </div>
      </div>
    </footer>
  )
}
