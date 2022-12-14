import { useStaticQuery, graphql } from "gatsby"

const useBanner = () => {
  return useStaticQuery(graphql`
    {
      allSanityBanner {
        nodes {
          title
          description
          color {
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
        }
      }
    }
  `)
}

export default useBanner
