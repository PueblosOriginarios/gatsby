import { useStaticQuery, graphql } from "gatsby"

const useVigentes = () => {
  return useStaticQuery(graphql`
    {
      allSanityVigentes {
        nodes {
          id
          titleVigentes {
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
          _rawRichTextVigentes
          button {
            link
            nameButton
          }
          cards {
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
    }
  `)
}

export default useVigentes
