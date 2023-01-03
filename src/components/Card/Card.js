import React from "react";
import { useMediaQuery } from "react-responsive";
import SanityImage from "gatsby-plugin-sanity-image";
import { PortableText } from "@portabletext/react";
import { Link } from "gatsby";

import "./Card.scss";

const Card = ({
  data: { title, slug, link, _rawContent, image, artists },
  wide,
}) => {
  const icon = artists?.imageIcon;
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  const showArtists = artists !== undefined && !isMobile;
  const wideCard = wide ? "wide" : "";

  return (
    <div className={`Card ${wideCard}`}>
      {image && (
        <div>
          <SanityImage {...image} alt={`${title}`} className='ImageContainer' />
        </div>
      )}
      {title && <h6 className='title-small Title'>{title}</h6>}
      {_rawContent && (
        <div className='Content'>
          <PortableText value={_rawContent} />
        </div>
      )}
      {showArtists && (
        <div className='ArtistsContainer'>
          <div className='Profile'>
            <a href={artists?.link} rel='noopener noreferrer' target='_blank'>
              <SanityImage
                {...icon}
                alt='Icon Image'
                loading='eager'
                className='Icon'
              />
              <p className='body-small fw-bolder'>{artists?.label}</p>
            </a>
          </div>
          <div className='Artists'>{artists?.description}</div>
        </div>
      )}
      {slug ? (
        <Link to={`../${slug}`} className='Link'>
          <small>Ver más</small>
        </Link>
      ) : (
        link && (
          <a
            href={link}
            rel='noopener noreferrer'
            className='Link'
            target='_blank'
          >
            <small>Ver más</small>
          </a>
        )
      )}
    </div>
  );
};

export default Card;
