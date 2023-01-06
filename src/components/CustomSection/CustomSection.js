import React from "react";
import {
  DualSymmetric,
  TextBlock,
  BannerDoble,
  CarouselImages,
  Youtube,
} from "../";

const CustomSection = ({ sections }) => {
  const sectionResult = sections?.map((section, index) => {
    return (
      <>
        {section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "textBlock" ? (
          <TextBlock
            key={index}
            subTitle={section?.subTitle}
            richText={section?._rawRichText}
          />
        ) : null}

        {section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "dualSectionArray" ? (
          <DualSymmetric key={index} data={section?.dualSymmetric} />
        ) : null}

        {section?.images !== null && section?.images !== undefined ? (
          <div className='my-3'>
            <CarouselImages key={index} data={section} />
          </div>
        ) : null}

        {section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "sectionBanner" ? (
          <>
            <BannerDoble key={index} data={section?.banner} />
          </>
        ) : null}

        {section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "youtube" ? (
          <Youtube
            key={index}
            titulo={section?.titulo}
            videoUrl={section?.url}
          />
        ) : null}
      </>
    );
  });

  return <>{sectionResult}</>;
};

export default CustomSection;
