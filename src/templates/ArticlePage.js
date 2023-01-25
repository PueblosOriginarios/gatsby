import React from "react";
import { Page } from "../components/Page/index";
import { graphql } from "gatsby";
import SanityImage from "gatsby-plugin-sanity-image";
import { CustomSection } from "../components/index";
import "./ArticlePage.scss";

const ArticlePage = ({ data }) => {
  const { title, imageHeader } = data?.allSanityArticle?.nodes[0];

  const pageInfo = data?.allSanityArticle?.nodes[0];

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
          <CustomSection sections={pageInfo?.ArticleBuilder} />
        </section>
      </Page>
    </>
  );
};

export default ArticlePage;

export const query = graphql`
  query($slug: String!) {
    allSanityArticle(filter: { slug: { current: { eq: $slug } } }) {
      nodes {
        ArticleBuilder {
          ... on SanityDualAsymmetric {
            id
            _type
            imageSide
            description
            title
            urlAudio {
              asset {
                url
              }
            }
            _rawRichTextDualA
            button {
              link
              nameButton
            }
            bgColor {
              title
              value
            }
            image {
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
          ... on SanityDualSectionArray {
            _key
            _type
            dualSymmetric {
              _rawRichTextDualS
              titleDualS
              shortText
              imageSide
              backgroundColor {
                title
                value
              }
              button {
                link
                nameButton
              }
              iconObject {
                label
                description
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
              imageDualS {
                asset {
                  _id
                }
                crop {
                  _key
                  _type
                  bottom
                  right
                  left
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
              youtubeVideo {
                url
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
          }
          ... on SanityYoutube {
            _key
            _type
            titulo
            url
          }
          ... on SanityTextBlock {
            _key
            _type
            _rawRichText
            _rawRichTextOculto
            subTitle
          }
        }
        title
        _rawRichText
        tipoArticuloNoticia
        slug {
          current
        }
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
      }
    }
  }
`;
