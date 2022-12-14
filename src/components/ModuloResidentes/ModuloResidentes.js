import React from "react"
import { PortableText } from "@portabletext/react"
import LogosResidentes from "../LogosSections/LogosSections"
import "./ModuloResidentes.scss"

export default function ModuloResidentes({ data }) {
  console.log(data)
  return (
    <>
      <div className="textResident">
        <div className="emptyLeft"></div>
        <PortableText value={data._rawContent} />
        <div className="emptyRight"></div>
      </div>

      <LogosResidentes data={data.logos} />
    </>
  )
}
