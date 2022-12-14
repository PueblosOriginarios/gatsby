import { useStaticQuery, graphql } from "gatsby"

const useCardVigentes = () => {
  return useStaticQuery(graphql`
    {
      allSanityCardsVigentes {
        nodes {
          id
          title
          _rawContent
          link
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
        }
      }
    }
  `)
}

export default useCardVigentes
