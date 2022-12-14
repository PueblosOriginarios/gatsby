import { useStaticQuery, graphql } from "gatsby"

const useFooter = () => {
  return useStaticQuery(graphql`
    {
      allSanityFooter {
        nodes {
          address
          phone
          email
          logo {
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
          media {
            _key
            link
            icon {
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
  `)
}

export default useFooter
