import { useStaticQuery, graphql } from "gatsby"

const useDualSymmetric = () => {
  return useStaticQuery(graphql`
    {
        allSanityDualSymmetric {
            nodes {
              titleDualS
              _rawRichTextDualS
              shortText
              imageSide
              youtubeVideo {
                url
              }
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
                link
                description
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
        }
    }
    
  `)
}

export default useDualSymmetric
