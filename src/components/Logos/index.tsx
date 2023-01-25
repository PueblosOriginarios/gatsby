import SanityImage from "gatsby-plugin-sanity-image";
import React from "react";
import useFooter from "../../hooks/useFooter";
import "./style.css";

export function Logos(): React.ReactElement {
  const footerLogos = useFooter().allSanityFooter?.nodes[0].logo;
  
  return (
    <div className="logo-container py-4"> 
        {footerLogos && footerLogos.map((logo: any) => (
          <div className="image-content"> 
          <SanityImage
          {...logo}
          alt="Logo"
        /> 
        </div>
        ))} 
      
    </div>
  );
}
