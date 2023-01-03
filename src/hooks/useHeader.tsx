import { useStaticQuery, graphql } from "gatsby"

const useHeader = () => {
  return useStaticQuery(graphql`
    {
      allSanityHeader {
        nodes {
          menu {
            nameMenu
            link
            submenu {
              Namesubmenu
              link
            }
          }
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
          ctaButton {
            link
            nameButton
          }
        }
      }
    }
  `)
}

export default useHeader
