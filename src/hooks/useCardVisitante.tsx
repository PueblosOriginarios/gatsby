import { useStaticQuery, graphql } from "gatsby"

const useCardVisitante = () => {
  return useStaticQuery(graphql`
    {
      allSanityArticle {
        nodes {
          id
          title
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
          slug {
            current
          }
          articleCard {
            _rawContent
            artists {
              label
              link
              imageIcon {
                asset {
                    _id
                }
                hotspot {
                    _key
                    _type
                    height
                    width
                    y
                    x
                }
                crop {
                    _key
                    _type
                    bottom
                    left
                    right
                    top
                }
              }
              description
            }
          }
        }
      }
    }
  `)
}

export default useCardVisitante
