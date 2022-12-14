const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // CREACION DE PAGINAS DE ARTÍCULO
  const { data: articleQueryData } = await graphql(`
    query Articles {
      allSanityArticle {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `)

  if (articleQueryData.errors) {
    reporter.panicOnBuild("Error creando paginas de article")
  }

  articleQueryData.allSanityArticle.nodes.forEach(node => {
    const articleDetail = path.resolve("./src/templates/ArticlePage.js")
    createPage({
      path: "/visitantes/" + node.slug.current,
      component: articleDetail,
      context: { slug: node.slug.current },
    })
  })
}
