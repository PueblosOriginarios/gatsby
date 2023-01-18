import React from "react";
import { Page } from "../components/index";
import { Seo } from "../components/seo";
import { graphql } from "gatsby";
import SanityImage from "gatsby-plugin-sanity-image";
import { CustomSection } from "../components/index";
import "./Historia.scss";

const HistoriaPage = ({ data }) => {
  const { title, imageHeader } = data?.allSanityHistoria?.nodes[0];

  const pageInfo = data?.allSanityHistoria?.nodes[0];

  return (
    <>
      <Seo
        title='Historia'
        description='Página con información de la historia del pueblo originario'
        keywords='Historia, Información, Pueblos, Originarios'
      />
      <Page>
        <section className='article'>
          <div className='articleHeader'>
            <div className='empty-left'></div>

            <div>
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
          <CustomSection sections={pageInfo?.HistoriaBuilder} />
        </section>
      </Page>
    </>
  );
};

export default HistoriaPage;

export const query = graphql`
  query($slug: String!) {
    allSanityHistoria(filter: { tipoHistoria: { eq: $slug } }) {
      nodes {
        title
        tipoHistoria
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
        HistoriaBuilder {
          ... on SanityDualSectionArray {
            _key
            _type
            dualSymmetric {
              _rawRichTextDualS
              backgroundColor {
                title
                value
              }
              titleDualS
              shortText
              button {
                link
                nameButton
              }
              iconObject {
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
                    height
                    width
                    x
                    y
                  }
                }
                label
                description
              }
              youtubeVideo {
                url
              }
              imageDualS {
                asset {
                  _id
                }
                crop {
                  _type
                  _key
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
              imageSide
            }
          }
          ... on SanityCarousel {
            title
            images {
              asset {
                _id
              }
              hotspot {
                _key
                _type
                height
                width
                x
                y
              }
              crop {
                _key
                _type
                bottom
                left
                top
                right
              }
            }
          }
          ... on SanityTextBlock {
            _key
            _type
            _rawRichText
            _rawRichTextOculto
            subTitle
          }
          ... on SanityYoutube {
            _key
            _type
            url
            titulo
          }
          ... on SanityDualAsymmetric {
            id
            _type
            title
            _rawRichTextDualA
            description
            imageSide
            image {
              crop {
                _key
                _type
                top
                bottom
                left
                right
              }
              hotspot {
                _key
                _type
                x
                y
                height
                width
              }
              asset {
                _id
              }
            }
            urlAudio {
              asset {
                url
              }
            }
            button {
              nameButton
              link
            }
            bgColor {
              title
              value
            }
          }
        }
      }
    }
  }
`;
