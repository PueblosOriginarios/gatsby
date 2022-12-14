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
          logoMobile {
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
