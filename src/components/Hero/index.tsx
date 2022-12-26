import React from "react"
import SanityImage from "gatsby-plugin-sanity-image"
import { Animation } from "../../components/Animation"
import { Section } from "../../components/Section"
import { HeroContent } from "../../types"
import { PortableText } from "@portabletext/react"
import * as classes from "./style.module.css"

export function Hero(props: HeroContent): React.ReactElement {
  const heroImage = props?.data?.imageHero

    return (
    
            <Animation type="fadeUp" delay={400}>
            <Section anchor={props.sectionId} additionalClasses={[classes.HeroContainer]}>
                <div className={classes.Hero}>
                    <div className={classes.Intro}>
                        {heroImage && (
                            <Animation className={classes.Image} type="waving-hand" duration={2500} iterationCount={3}>
                                <SanityImage {...heroImage} alt="Intro Image" loading="eager" />
                            </Animation>
                        )}
                    </div>
                    <h4 className={classes.Title}>{props?.data?.titleHero}</h4>
                    <PortableText value={props?.data?._rawRichTextHero} />
                </div>
            </Section>
        </Animation>

        
    );
}
