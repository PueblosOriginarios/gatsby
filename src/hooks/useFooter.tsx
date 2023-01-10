import { useStaticQuery, graphql } from "gatsby"

const useFooter = () => {
  return useStaticQuery(graphql`
    {
      allSanityFooter {
        nodes {
          email
        }
      }
    }
  `)
}

export default useFooter
