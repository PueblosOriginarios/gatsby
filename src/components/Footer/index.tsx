import React from "react"
import Email from "./Email/Email"
import "./style.scss"

export function Footer(): React.ReactElement {
  return (
    <footer className="Footer">
      <div className="FooterWrapper">
        <div className="Contacto">
          <h5 className="Title headline-small">Contactanos</h5>
          <div className="Contactos">
            <Email />
          </div>
        </div>
      </div>
    </footer>
  )
}
