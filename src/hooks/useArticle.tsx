import { useStaticQuery, graphql } from "gatsby"

const useArticle = () => {
  return useStaticQuery(graphql`
    {
      allSanityArticle {
        nodes {
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
              x
              width
              y
            }
          }
          
        }
      }
    }
  `)
}

export default useArticle
