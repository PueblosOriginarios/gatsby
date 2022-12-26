import { useStaticQuery, graphql } from "gatsby"

const useFooter = () => {
  return useStaticQuery(graphql`
    {
      allSanityFooter {
        nodes {
          address
          phone
          email
        }
      }
    }
  `)
}

export default useFooter
