 import { useStaticQuery, graphql } from "gatsby"

const useHero = () => {
  return useStaticQuery(graphql`
    {
      allSanityHero {
        nodes {
          titleHero
          _rawRichTextHero
          imageHero {
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

export default useHero
 