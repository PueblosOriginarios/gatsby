import React from "react"
import SanityImage from "gatsby-plugin-sanity-image"
import useFooter from "../../hooks/useFooter"
import "./SocialMedia.scss"

const SocialMedia = ({ logo }) => {
  const footer = useFooter().allSanityFooter?.nodes[0]
  const mediaData = footer?.media
  const logoData = footer?.logo

  const socialMedia = mediaData?.map(media => {
    return (
      <a
        href={media?.link}
        target="_blank"
        rel="noopener noreferrer"
        key={media._key}
      >
        <SanityImage {...media?.icon} alt={media?.link} className="Media" />
      </a>
    )
  })
  return (
    <>
      {logo && logoData ? (
        <div className="Social">
          <SanityImage {...logoData} alt="Logo" className="Logo" />

          <div className="Medias">{socialMedia}</div>
        </div>
      ) : (
        <div className="MediasHero">{socialMedia}</div>
      )}
    </>
  )
}

export default SocialMedia
