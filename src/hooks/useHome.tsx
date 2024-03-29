import { useStaticQuery, graphql } from "gatsby";

const useHome = () => {
  return useStaticQuery(graphql`
    {
      allSanityHome {
        nodes {
          HomeBuilder {
            ... on SanityTextBlock {
              _key
              _type
              subTitle
              _rawRichText
              _rawRichTextOculto
            }
            ... on SanityBannerDoble {
              imageDescription
              id
              _type
              title
              subtitle {
                description
                label
                imageIcon {
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
              }
              description
              _rawContent
              bgColorBanner {
                title
                value
              }
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
              button {
                nameButton
                link
              }
              buttonType
            }
            ... on SanityDualSymmetric {
              id
              _type
              imageSide
              urlVideo
              shortText
              titleDualS
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
              }
              imageDualS {
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
            }
            ... on SanityDualAsymmetric {
              imageDescription
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
            ... on SanityCarousel {
              title
              images {
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
            }
          }
        }
      }
    }
  `);
};

export default useHome;
