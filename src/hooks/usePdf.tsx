import { useStaticQuery, graphql } from "gatsby";

const usePdf = () => {
  return useStaticQuery(graphql`
    {
      allSanityPdf {
        nodes {
          _id
          categoryReferences {
            categoryReference {
              category
            }
          }
          title
          link
          slug {
            current
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
          _rawCenteredText
          _rawShortDescription
          _rawDescription
        }
      }
    }
  `);
};

export default usePdf;
