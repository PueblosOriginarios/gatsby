import React from "react";
import { Page } from "../components/index";
import { Seo } from "../components/seo";
import { graphql } from "gatsby";
import SanityImage from "gatsby-plugin-sanity-image";
import { CustomSection } from "../components/index";
import "./Cultura.scss";

const CulturaPage = ({ data }) => {
  const { title, imageHeader } = data?.allSanityCultura?.nodes[0];

  const pageInfo = data?.allSanityCultura?.nodes[0];

  return (
    <>
      <Seo
        title="Cultura"
        description="Página con información de la cultural del pueblo originario"
        keywords="Cultura, Información, Pueblos, Originarios"
      />
      <Page>
        <section className='article'>
          <div className='articleHeader'>
            <div className='empty-left'></div>

            <div className='mb-5'>
              {imageHeader && (
                <SanityImage
                  {...imageHeader}
                  alt='Image Art'
                  className='imageHeader'
                />
              )}

              <div className='titleContent'>
                <div></div>
                {title && (
                  <>
                    <h5 className='title'>{title}</h5>
                    <div className='vacio'></div>
                  </>
                )}

                <div></div>
              </div>
            </div>
            <div className='empty-right'></div>
          </div>
          <CustomSection sections={pageInfo?.CulturaBuilder} />
        </section>
      </Page>
    </>
  );
};

export default CulturaPage;

export const query = graphql`
  query($slug: String!) {
    allSanityCultura(filter: { tipoCultura: { eq: $slug } }) {
      nodes {
        title
        tipoCultura
        imageHeader {
          asset {
            _id
          }
          crop {
            _key
            _type
            bottom
            left
            right
            top
          }
          hotspot {
            _key
            _type
            height
            width
            x
            y
          }
        }
        CulturaBuilder {
          ... on SanityDualSectionArray {
            _key
            _type
            dualSymmetric {
              youtubeVideo {
                titulo
                url
              }
              titleDualS
              shortText
              imageSide
              _rawRichTextDualS
              backgroundColor {
                title
                value
              }
              button {
                link
                nameButton
              }
              iconObject {
                description
                label
                imageIcon {
                  asset {
                    _id
                  }
                  crop {
                    _key
                    _type
                    bottom
                    left
                    right
                    top
                  }
                  hotspot {
                    _key
                    _type
                    width
                    height
                    x
                    y
                  }
                }
              }
              imageDualS {
                asset {
                  _id
                }
                crop {
                  _key
                  _type
                  bottom
                  left
                  right
                  top
                }
                hotspot {
                  _key
                  _type
                  height
                  width
                  x
                  y
                }
              }
            }
          }
          ... on SanityCarousel {
            title
            images {
              asset {
                _id
              }
              crop {
                _key
                _type
                bottom
                left
                right
                top
              }
              hotspot {
                _key
                _type
                height
                width
                x
                y
              }
            }
            id
          }
          ... on SanityTextBlock {
            _key
            _type
            _rawRichText
            subTitle
          }
          ... on SanityYoutube {
            _key
            _type
            titulo
            url
          }
        }
      }
    }
  }
`;
