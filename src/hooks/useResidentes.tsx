import { useStaticQuery, graphql } from "gatsby"

const useResidentes = () => {
  return useStaticQuery(graphql`
  {
    allSanityResidentes {
        nodes {
          banner {
            title
            description
            color {
              title
              value
            }
            image {
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
          }
          bannerDoble {
            title
            description
            _rawContent
            button {
              nameButton
              link
            }
            buttonType
            colorLeft {
              title
              value
            }
            colorRight {
              title
              value
            }
            image {
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
            subtitle {
              link
              label
              description
              imageIcon {
                asset {
                  _id
                }
                crop {
                  _key
                  bottom
                  _type
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
            }
          }
          id
          moduloResidentes {
            _rawContent
            logos {
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
          }
          productos {
            _rawContent
            icon {
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
            title
          }
          quotes {
            quoteCards {
              quote {
                _rawChildren
              }
              author {
                _rawChildren
              }
              authorImage {
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
              _rawQuote
            }
            title
          }
        }
      }
  }
  `)
}

export default useResidentes