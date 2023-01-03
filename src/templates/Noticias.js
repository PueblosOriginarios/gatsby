import React from "react";
import { CardsVisitantes, Page } from "../components/index";
import { graphql } from "gatsby";
import SanityImage from "gatsby-plugin-sanity-image";
import { CustomSection } from "../components/index";
import useArticle from "../hooks/useArticle";
import "./Noticias.scss";

const NoticiasPage = ({ data }) => {
  const { title } = data?.allSanityNoticias?.nodes[0];

  const pageInfo = data?.allSanityNoticias?.nodes[0];

  const dataArticle = useArticle().allSanityArticle?.nodes;
  console.log(dataArticle);
  console.log(pageInfo);
  return (
    <>
      <Page>
        <section className='article'>
          <div className='articleHeader'>
            <div className='empty-left'></div>

            <div className='mb-5'>
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
              <div>
                {dataArticle?.tipoArticuloNoticia ===
                  pageInfo?.tipoNoticias && (
                  <CardsVisitantes data={dataArticle} />
                )}
              </div>
            </div>
            <div className='empty-right'></div>
          </div>
          <CardsVisitantes data={dataArticle} />
          <CustomSection sections={pageInfo?.noticiasBuilder} />
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
`;
