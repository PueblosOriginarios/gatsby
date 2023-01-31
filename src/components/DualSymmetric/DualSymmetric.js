import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import { Animation } from "../Animation";
import { PortableText } from "@portabletext/react";
import "./style.scss";

const DualSymmetric = ({
  data: {
    titleDualS,
    imageDualS,
    iconObject,
    imageSide,
    urlVideo,
    backgroundColor,
    _rawRichTextDualS,
    shortText,
    button,
  },
}) => {
  const imageIcon = iconObject?.imageIcon;
  const dataImage = imageDualS?.asset;
  const videoUrl = urlVideo

  const darkColors = ["#0A694D", "#868585", "#1B1C1E"];

  const textColor = darkColors.includes(backgroundColor?.value)
    ? "#FFFFFF"
    : "#1B1C1E";

  const buttonColor = darkColors.includes(backgroundColor?.value)
    ? "alternative"
    : "default";

  const url = videoUrl?.replace("watch?v=", "embed/");
  let code = url?.substring(url.lastIndexOf("/") + 1, url.length);
  const codeIndex = code?.indexOf("?");

  if (codeIndex !== -1 && code !== undefined) {
    code = code.substring(0, code.indexOf("?"));
  }

  return (
    <Animation
      type='fadeLeft'
      className='bodyDual'
      style={{ backgroundColor: backgroundColor?.value }}
    >
      <section className={`DualSymmetric ${imageSide}`}>
        {dataImage && !videoUrl && (
          <div className={`imageContainer ${imageSide}`}>
            <SanityImage
              {...imageDualS}
              alt='Image Art'
              className='imageWrapper'
            />
          </div>
        )}

        {videoUrl !== null && videoUrl !== undefined && (
          <div className={`videoContainer ${imageSide}`}>
            {url !== undefined && code !== undefined && (
              <iframe
                loading='lazy'
                type='text/html'
                srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute; width:100%;height:100%;object-fit: cover;top:0;bottom:0;max-height: 500px}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;margin:auto;text-shadow:0 0 0.5em black}</style>
              <a href=${url + "?rel=0"}>
              <img src=https://img.youtube.com/vi/${code}/hqdefault.jpg alt='Video'>
              <span>▶</span></a>`}
                src={url + "?rel=0"}
                frameBorder='0'
                allowFullScreen
                title='youtube_video'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                webkitallowfullscreen='true'
                mozallowfullscreen='true'
              ></iframe>
            )}
          </div>
        )}

        <div
          className={`TextDetails ${imageSide}`}
          style={{ color: textColor }}
        >
          {(titleDualS || _rawRichTextDualS) && (
            <>
              <h4 style={{ color: textColor, marginTop: 0 }}>{titleDualS}</h4>
              <PortableText value={_rawRichTextDualS} />
            </>
          )}

          {iconObject && (
            // <div className="Profile d-flex align-items-center mt-4">
            <div className='Profile d-flex  mt-4 mb-3'>
              <div className='me-3 mb-3 d-flex flex-column Profile__Icon'>
                <SanityImage {...imageIcon} alt='Icon Image' loading='eager' />
                <small className='label-small' style={{ color: textColor }}>
                  {iconObject?.label}
                </small>
              </div>
              <div>
                <p className='body-medium'>{iconObject?.description}</p>
              </div>
            </div>
          )}

          {shortText && (
            <div className='mt-2 mb-2'>
              <small>{shortText}</small>
            </div>
          )}

          {button?.link && (
            <a
              href={button?.link}
              target='_blank'
              rel='noopener noreferrer'
              className={`CtaButton ${buttonColor}`}
            >
              <small>{button?.nameButton}</small>
            </a>
          )}
        </div>
        <div className={`emptyRight ${imageSide}`}></div>
      </section>
    </Animation>
  );
};

export default DualSymmetric;
