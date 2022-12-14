import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Page } from "../components/Page/index"
import useResidentes from "../hooks/useResidentes.tsx"
import Banner from "../components/Banner/Banner"
import BannerDoble from "../components/BannerDoble/BannerDoble"
import ModuloResidentes from "../components/ModuloResidentes/ModuloResidentes"
import Products from "../components/Products/Products"

import "./residentes.scss"

export default function Residentes() {
  const data = useResidentes().allSanityResidentes.nodes[1]
  console.log(data, "data")
  return (
    <>
      <Page>
        {data.banner !== null && data.banner !== undefined && (
          <Banner data={data.banner} />
        )}
        {data.moduloResidentes !== null &&
          data.moduloResidentes !== undefined && (
            <ModuloResidentes data={data.moduloResidentes} />
          )}
        {data.productos !== null && data.productos !== undefined && (
          <Products data={data.productos} />
        )}
        <div className="containerBanner">
          {data.bannerDoble !== null && data.bannerDoble !== undefined && (
            <BannerDoble data={data.bannerDoble} />
          )}
        </div>
      </Page>
    </>
  )
}
