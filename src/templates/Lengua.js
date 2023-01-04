import React from "react";
import { Page } from "../components/Page/index";
import { graphql } from "gatsby";
import SanityImage from "gatsby-plugin-sanity-image";
import { CustomSection } from "../components/index";
import "./Lengua.scss";

const LenguaPage = ({ data }) => {
  console.log(data);
  const { title, imageHeader } = data?.allSanityLengua?.nodes[0];

  const pageInfo = data?.allSanityLengua?.nodes[0];
  console.log(pageInfo);

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
                link
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
