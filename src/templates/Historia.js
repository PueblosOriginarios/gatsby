import React from "react";
import { Page } from "../components/Page/index";
import { graphql } from "gatsby";
import SanityImage from "gatsby-plugin-sanity-image";
import { CustomSection } from "../components/index";
import "./Historia.scss";

const HistoriaPage = ({ data }) => {
  console.log(data);
  const { title, imageHeader } = data?.allSanityHistoria?.nodes[0];

  const pageInfo = data?.allSanityHistoria?.nodes[0];
  console.log(pageInfo);

  return (
    <>
      <Page>
        <section className='article'>
          <div className='articleHeader'>
            <div className='empty-left'></div>
            <div>
              <SanityImage
                {...imageHeader}
                alt='Image Art'
                className='imageHeader'
              />
              <div className='titleContent'>
                <div></div>
                <h5 className='title'>{title}</h5>
                <div className='vacio'></div>
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
                link
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
          ... on SanityImageComponent {
            _key
            _type
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
          ... on SanityTextBlock {
            _key
            _type
            _rawRichText
            subTitle
          }
          ... on SanityYoutube {
            _key
            _type
            url
            titulo
          }
        }
      }
    }
  }
`;
