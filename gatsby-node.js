const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // CREACION DE PAGINAS DE HISTORIA
  const { data: historiaQueryData } = await graphql(`
    query Historia {
      allSanityHistoria {
        nodes {
          tipoHistoria
        }
      }
    }
  `);

  if (historiaQueryData.errors) {
    reporter.panicOnBuild("Error creando paginas de historia");
  }

  historiaQueryData.allSanityHistoria.nodes.forEach((node) => {
    const historiaDetail = path.resolve("./src/templates/Historia.js");
    createPage({
      path: node.tipoHistoria + "/historia/",
      component: historiaDetail,
      context: { slug: node.tipoHistoria },
    });
  });
};
