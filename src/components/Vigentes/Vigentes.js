import React from "react"
import "./Vigentes.scss"
import SanityImage from "gatsby-plugin-sanity-image"
import { PortableText } from "@portabletext/react"
import { useMediaQuery } from "react-responsive"
import Card from "../Card/Card"
import bgDesktop from "../../images/Bg-vigentes-desktop.png"
import bgMobile from "../../images/Bg-vigentes-mobile.png"

const Vigentes = ({
  data: { titleVigentes, _rawRichTextVigentes, button, cards },
}) => {
  const cardsComponent = cards?.slice(0, 2)?.map((card, id) => {
    const cardData = {
      title: card?.title,
      image: card?.image,
      _rawContent: card?._rawContent,
      link: card?.link,
    }
    return <Card data={cardData} key={id} wide />
  })
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" })
  const isTablet = useMediaQuery({
    query: "(min-width: 767px) and (max-width: 992px)",
  })

  const content = (
    <>
      <div className="VigentesText">
        {titleVigentes && (
          <div className="ImageWrapper">
            <SanityImage {...titleVigentes} alt="Title Image" />
          </div>
        )}
        {_rawRichTextVigentes && <PortableText value={_rawRichTextVigentes} />}
        {button.link && (
          <a
            href={button.link}
            className="Button"
            target="_blank"
            rel="noreferrer"
          >
            {button.nameButton}
          </a>
        )}
      </div>
      <div className="CardsContainer">
        {cards && <div className="Cards">{cardsComponent}</div>}
      </div>
    </>
  )

  return (
    <div
      className="Vigentes"
      style={
        isMobile
          ? {
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${bgMobile})`,
            }
          : {
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${bgDesktop})`,
            }
      }
    >
      <div className="emptyLeft"></div>
      {/* if we are in tablet we need to have only 3 columns */}
      {isTablet ? <div>{content}</div> : content}
      <div className="emptyRight"></div>
    </div>
  )
}

export default Vigentes
