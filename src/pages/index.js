import React from "react"
import { Seo } from "../components/seo"
import Home from './home'

export default function IndexPage() {
  return (
    <>
      <Seo title="Home" description="" keywords=""/>
      <Home />
    </>
  )
}
