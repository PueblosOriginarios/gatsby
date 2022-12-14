import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import SanityImage from "gatsby-plugin-sanity-image"

import "./LogosSections.scss"

const LogosSections = ({ data }) => {
  const logoList = data.map(logo => {
    return (
      <div className="logos__image">
        <SanityImage {...logo} alt="logo" />
      </div>
    )
  })

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1025 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 992 },
      items: 3,
    },
    mobileTablet: {
      breakpoint: { max: 991, min: 577 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  }
  const CustomLeftArrow = ({ onClick }) => {
    return (
      <FontAwesomeIcon
        class="react-multiple-carousel__arrow react-multiple-carousel__arrow--left custom-arrow left"
        icon={faChevronLeft}
        onClick={() => onClick()}
      />
    )
  }
  const CustomRightArrow = ({ onClick }) => {
    return (
      <FontAwesomeIcon
        class="react-multiple-carousel__arrow react-multiple-carousel__arrow--right custom-arrow right"
        icon={faChevronRight}
        onClick={() => onClick()}
      />
    )
  }

  return (
    <div className="logos my-5">
      <Carousel
        responsive={responsive}
        autoPlay={logoList.length > 4}
        autoPlaySpeed={3000}
        infinite={logoList.length > 4}
        containerClass={"containerCarrusel"}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        removeArrowOnDeviceType={logoList.length <= 4 && ["tablet", "desktop"]}
      >
        {logoList}
      </Carousel>
    </div>
  )
}

export default LogosSections
