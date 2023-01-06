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
          tipoPdf
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
    if (node?.tipoPdf === "ambos") {
      createPage({
        path: "guarani/pdf/" + node.slug.current,
        component: pdfDetail,
        context: { slug: node.slug.current },
      });
      createPage({
        path: "chane/pdf/" + node.slug.current,
        component: pdfDetail,
        context: { slug: node.slug.current },
      });
    } else {
      createPage({
        path: node?.tipoPdf + "/pdf/" + node.slug.current,
        component: pdfDetail,
        context: { slug: node.slug.current },
      });
    }
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

  // CREACION DE PAGINAS DE LENGUAS
  const { data: lenguaQueryData } = await graphql(`
    query Lengua {
      allSanityLengua {
        nodes {
          tipoLengua
        }
      }
    }
  `);

  if (lenguaQueryData.errors) {
    reporter.panicOnBuild("Error creando paginas de lengua");
  }

  lenguaQueryData.allSanityLengua.nodes.forEach((node) => {
    const lenguaDetail = path.resolve("./src/templates/Lengua.js");
    createPage({
      path: node.tipoLengua + "/lengua/",
      component: lenguaDetail,
      context: { slug: node.tipoLengua },
    });
  });

  // CREACION DE PAGINAS DE MATERIALES
  const { data: materialesQueryData } = await graphql(`
    query Materiales {
      allSanityMateriales {
        nodes {
          tipoMateriales
        }
      }
    }
  `);

  if (materialesQueryData.errors) {
    reporter.panicOnBuild("Error creando paginas de Materiales Didacticos");
  }

  materialesQueryData.allSanityMateriales.nodes.forEach((node) => {
    const materialDetail = path.resolve("./src/templates/Materiales.js");
    createPage({
      path: node.tipoMateriales + "/materiales/",
      component: materialDetail,
      context: { slug: node.tipoMateriales },
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
