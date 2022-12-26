import SanityImage from "gatsby-plugin-sanity-image"
import React from "react"
import useHeader from "../../hooks/useHeader"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import "./style.css"

export function Logo(): React.ReactElement {
  const isDesktopBreakpoint = useMediaQuery("(min-width: 992px)")
  const headerImageDesktop = useHeader().allSanityHeader?.nodes[0]?.logo
  const headerImageMobile = useHeader().allSanityHeader?.nodes[0]?.logoMobile

  return (
    <div className={"Logo"} aria-roledescription="logo">
      {isDesktopBreakpoint ? (
        <SanityImage
          {...headerImageDesktop}
          alt="Logo bitlogic"
          width={120}
          style={{ objectFit: "scale-down", maxWidth: "120px" }}
        />
      ) : (
        <SanityImage
          {...headerImageMobile}
          alt="Logo bitlogic"
          width={100}
          style={{ objectFit: "scale-down", maxWidth: "100px" }}
        />
      )}
    </div>
  )
}
