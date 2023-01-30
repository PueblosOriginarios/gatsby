import React from "react";
import { Page } from "../components/index";
import { graphql } from "gatsby";
import { Seo } from "../components/seo";
import CardsNoticias from "../components/CardsNoticias/CardsNoticias";
import CardEvento from "../components/CardEventos/CardsEventos";
import "./Noticias.scss";

const NoticiasPage = ({ data }) => {
  const { title } = data?.allSanityNoticias?.nodes[0];

  const infoEventos = data?.allSanityEventos?.nodes;
  const dataArticle = data?.allSanityArticle?.nodes;

  return (
    <>
     <Seo
        title='Noticias'
        description='Página con información de la historia del pueblo originario'
        keywords='Noticias, Información, Pueblos, Originarios'
      />
      <Page>
        <section className='articleNoticia'>
          <div className='articleNoticiaHeader'>
            <div className='empty-left'></div>

            <div className='titleContent'>
              <div></div>
              {title && (
                <>
                  <h5 className='title'>{title}</h5>
                  <div className='vacio'></div>
                </>
              )}

              <div></div>
            </div>
          </div>
          <div className='empty-right'></div>

          {infoEventos && <CardEvento data={infoEventos} />}

          <CardsNoticias data={dataArticle} />
        </section>
      </Page>
    </>
  );
};

export default NoticiasPage;

export const query = graphql`
  query($slug: String!) {
    allSanityNoticias(filter: { tipoNoticias: { eq: $slug } }) {
      nodes {
        title
        tipoNoticias
      }
    }
    allSanityEventos(filter: { tipoEventos: { eq: $slug } }) {
      nodes {
        contenidoEvento
        title
        tipoEventos
        link
        shortText
        iconEvento {
          label
          description
          imageIcon {
            asset {
              _id
            }
            crop {
              _key
              bottom
              _type
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
      }
    }
    allSanityArticle(filter: { tipoArticuloNoticia: { eq: $slug } }) {
      nodes {
        title
        tipoArticuloNoticia
        slug {
          current
        }
        _rawRichText
        imageHeader {
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
            width
            x
            y
          }
        }
      }
    }
  }
`;
