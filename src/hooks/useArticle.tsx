import { useStaticQuery, graphql } from "gatsby"

const useArticle = () => {
  return useStaticQuery(graphql`
    {
      allSanityArticle {
        nodes {
          title
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
              x
              width
              y
            }
          }
          articleCard {
            _rawContent
            artists {
              link
              label
              description
              imageIcon {
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
                  width
                  height
                  x
                  y
                }
              }
            }
          }
        }
      }
    }
  `)
}

export default useArticle
