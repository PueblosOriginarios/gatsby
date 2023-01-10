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
          
        }
      }
    }
  `)
}

export default useCardVisitante
