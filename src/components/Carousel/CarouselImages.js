import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import SanityImage from "gatsby-plugin-sanity-image"
import "./CarouselImages.scss"

const CarouselImages = ({ images }) => {
  const imagesResult = images.map((image, idx) => (
    <div key={idx}>
      <SanityImage {...image} alt="Image Art" />
    </div>
  ))

  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showArrows={true}
      showThumbs={false}
    >
      {imagesResult}
    </Carousel>
  )
}

export default CarouselImages
