import React from "react";
import { PortableText } from "@portabletext/react";
import "./TextBlock.scss";

const TextBlock = ({ data: { subTitle, _rawRichText } }) => {
  return (
    <div className='textContainer'>
      <div className='empty-left'></div>
      <div className='contentText'>
        <h5 className='headline-small my-4'>{subTitle}</h5>
        <PortableText value={_rawRichText} />
      </div>
      <div className='empty-right'></div>
    </div>
  );
};

export default TextBlock;
