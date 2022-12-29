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

  // CREACION DE PAGINAS DE CULTURA
  const { data: culturaQueryData } = await graphql(`
    query Cultura {
      allSanityCultura {
        nodes {
          tipoCultura
        }
      }
    }
  `);

  if (culturaQueryData.errors) {
    reporter.panicOnBuild("Error creando paginas de cultura");
  }

  culturaQueryData.allSanityCultura.nodes.forEach((node) => {
    const culturaDetail = path.resolve("./src/templates/Cultura.js");
    createPage({
      path: node.tipoCultura + "/cultura/",
      component: culturaDetail,
      context: { slug: node.tipoCultura },
    });
  });

  // CREACION DE PAGINAS DE PDFs
  const { data: pdfQueryData } = await graphql(`
    query PDF {
      allSanityPdf {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  if (pdfQueryData.errors) {
    reporter.panicOnBuild("Error creando paginas de PDFs");
  }

  pdfQueryData.allSanityPdf.nodes.forEach((node) => {
    const pdfDetail = path.resolve("./src/templates/PdfPage.js");
    createPage({
      path: "/pdf/" + node.slug.current,
      component: pdfDetail,
      context: { slug: node.slug.current },
    });
  });
};
