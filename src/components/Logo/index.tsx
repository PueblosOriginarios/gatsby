import SanityImage from "gatsby-plugin-sanity-image";
import React from "react";
import useHeader from "../../hooks/useHeader";
import "./style.css";

export function Logo(): React.ReactElement {
  const headerImageDesktop = useHeader().allSanityHeader?.nodes[0]?.logo;

  return (
    <div className={"Logo"} aria-roledescription="logo">
      {headerImageDesktop && (
        <SanityImage
          {...headerImageDesktop}
          alt="Logo"
          width={120}
          style={{ objectFit: "scale-down", maxWidth: "120px" }}
        />
      )}
    </div>
  );
}
