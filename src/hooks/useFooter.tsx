import { useStaticQuery, graphql } from "gatsby"

const useFooter = () => {
  return useStaticQuery(graphql`
    {
      allSanityFooter {
        nodes {
          logo {
            crop {
              _key
              _type
              bottom
              left
              right
              top
            }
            asset {
              _id
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
  `)
}

export default useFooter
