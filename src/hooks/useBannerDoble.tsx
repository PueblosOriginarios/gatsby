import { useStaticQuery, graphql } from "gatsby"

const useBannerDoble = () => {
  return useStaticQuery(graphql`
    {
      allSanityBannerDoble {
        nodes {
          title
          subtitle {
            description
            label
            link
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
          description
          _rawContent
          colorLeft {
            title
            value
          }
          colorRight {
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
          button {
            nameButton
            link
          }
          buttonType
        }
      }
    }
  `)
}

export default useBannerDoble
