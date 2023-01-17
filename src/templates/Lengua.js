import React from "react";
import { Page } from "../components/Page/index";
import { graphql } from "gatsby";
import SanityImage from "gatsby-plugin-sanity-image";
import { CustomSection } from "../components/index";
import "./Lengua.scss";

const LenguaPage = ({ data }) => {
  const { title, imageHeader } = data?.allSanityLengua?.nodes[0];

  const pageInfo = data?.allSanityLengua?.nodes[0];

  return (
    <>
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
          <CustomSection sections={pageInfo?.LenguaBuilder} />
        </section>
      </Page>
    </>
  );
};

export default LenguaPage;

export const query = graphql`
  query($slug: String!) {
    allSanityLengua(filter: { tipoLengua: { eq: $slug } }) {
      nodes {
        title
        tipoLengua
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
        LenguaBuilder {
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
          ... on SanityDualSectionArray {
            _key
            _type
            dualSymmetric {
              titleDualS
              shortText
              imageSide
              _rawRichTextDualS
              backgroundColor {
                title
                value
              }
              button {
                nameButton
                link
              }
              youtubeVideo {
                titulo
                url
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
              iconObject {
                imageIcon {
                  asset {
                    _id
                  }
                }
                description
                label
              }
            }
          }
          ... on SanityTextBlock {
            _key
            _type
            subTitle
            _rawRichText
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
