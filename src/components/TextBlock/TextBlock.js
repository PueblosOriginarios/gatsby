import React, { useState } from "react";
import { PortableText } from "@portabletext/react";
import "./TextBlock.scss";

const TextBlock = ({
  data: { subTitle, _rawRichText, _rawRichTextOculto },
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='textContainer'>
      <div className='empty-left'></div>
      <div className='contentText'>
        <h5 className='headline-small my-4'>{subTitle}</h5>
        <PortableText value={_rawRichText} />

        {!isExpanded && _rawRichTextOculto && (
          <button onClick={() => setIsExpanded(true)}>Leer más</button>
        )}

        {isExpanded && <PortableText value={_rawRichTextOculto} />}

        {isExpanded && (
          <button onClick={() => setIsExpanded(false)}>Leer menos</button>
        )}
      </div>
      <div className='empty-right'></div>
    </div>
  );
};

export default TextBlock;
