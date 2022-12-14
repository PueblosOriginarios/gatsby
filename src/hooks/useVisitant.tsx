import { useStaticQuery, graphql } from "gatsby"

const useVisitant = () => {
  return useStaticQuery(graphql`
    {
        allSanityVisitant {
            nodes {
              heroVisitant {
                _rawRichTextHeroBg
                titleHeroBg
                imageHeroBg {
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
                    x
                    width
                    y
                  }
                }
              }
              VisitantBuilder {
                ... on SanityBooleanArticle {
                  _key
                  _type
                  Articulos
              }
                ... on SanitySectionBanner {
                  _key
                  _type
                  banner {
                    id
                    title
                    subtitle {
                      label
                      link
                      description
                      imageIcon {
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
                    image {
                      asset {
                        _id
                      }
                      hotspot {
                        _key
                        height
                        _type
                        width
                        x
                        y
                      }
                      crop {
                        _key
                        _type
                        bottom
                        left
                        right
                        top
                      }
                    }
                    description
                    _rawContent
                    buttonType
                    button {
                      link
                      nameButton
                    }
                    colorLeft {
                      title
                      value
                    }
                    colorRight {
                      title
                      value
                    }
                  }
                }
              }
            }
        }
    }
    
  `)
}

export default useVisitant