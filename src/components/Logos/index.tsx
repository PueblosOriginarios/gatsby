import SanityImage from "gatsby-plugin-sanity-image";
import React from "react";
import useFooter from "../../hooks/useFooter";
import "./style.css";

export function Logos(): React.ReactElement {
  const footerLogos = useFooter().allSanityFooter?.nodes[0].logo;
   // console.log("hola!, " , footerLogos)
  return (
    <div className={"Logo"} aria-roledescription="logo"> 
        {footerLogos && footerLogos.map((logo: any) => (
        <div>
          <SanityImage
          {...logo}
          alt="Logo"
          width={120}
          style={{ objectFit: "scale-down", maxWidth: "120px" }}
        /> 
        </div>
        ))} 
      
    </div>
  );
}
