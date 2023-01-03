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

  // CREACION DE PAGINA DE NOTICIAS
  const { data: noticiaQueryData } = await graphql(`
    query Noticia {
      allSanityNoticias {
        nodes {
          tipoNoticias
        }
      }
    }
  `);

  if (noticiaQueryData.errors) {
    reporter.panicOnBuild("Error creando paginas de noticias");
  }

  noticiaQueryData.allSanityNoticias.nodes.forEach((node) => {
    const noticiaDetail = path.resolve("./src/templates/Noticias.js");
    createPage({
      path: node.tipoNoticias + "/noticias",
      component: noticiaDetail,
      context: { slug: node.tipoNoticias },
    });
  });

  // CREACION DE PAGINAS DE ARTICULOS NOTICIAS
  const { data: articleNoticiaQueryData } = await graphql(`
    query articleNoticia {
      allSanityArticle {
        nodes {
          tipoArticuloNoticia
          slug {
            current
          }
        }
      }
    }
  `);

  if (articleNoticiaQueryData.errors) {
    reporter.panicOnBuild("Error creando paginas de articulo noticia");
  }

  articleNoticiaQueryData.allSanityArticle.nodes.forEach((node) => {
    const articleNoticiaDetail = path.resolve("./src/templates/ArticlePage.js");
    createPage({
      path: node.tipoArticuloNoticia + "/noticias/" + node.slug.current,
      component: articleNoticiaDetail,
      context: { slug: node.slug.current },
    });
  });
};
