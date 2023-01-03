import { useStaticQuery, graphql } from "gatsby";

const useNoticias = () => {
  return useStaticQuery(graphql`
    {
      allSanityNoticias {
        nodes {
          title
          tipoNoticias
          subTitle
          noticiasBuilder {
            ... on SanityBooleanNoticias {
              _key
              _type
              articuloNoticias
            }
            ... on SanityTextBlock {
              _key
              _type
              subTitle
              _rawRichText
            }
          }
        }
      }
    }
  `);
};

export default useNoticias;
