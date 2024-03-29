import React from "react";
import { Page, Pdf } from "../components/index";
import { Seo } from "../components/seo";
import { graphql } from "gatsby";
import { PortableText } from "@portabletext/react";
import "./PdfPage.scss";

const PdfPage = ({ data }) => {
  const pageInfo = data?.allSanityPdf?.nodes[0];
  return (
    <>
      <Seo
        title='PDF'
        description='Página con material didáctico en formato PDF y una descripción'
        keywords='PDF, Material, Articulo'
      />
      <Page>
        <section className='PdfArticle'>
          <div className='empty-left'></div>
          <div className='ContentContainer'>
            <Pdf data={pageInfo} />
            {pageInfo?._rawDescription && (
              <div className='Description'>
                <PortableText value={pageInfo?._rawDescription} />
              </div>
            )}
            {pageInfo?._rawCenteredText && (
              <div className='CenteredText'>
                <PortableText value={pageInfo?._rawCenteredText} />
              </div>
            )}
          </div>
          <div className='empty-right'></div>
        </section>
      </Page>
    </>
  );
};

export default PdfPage;

export const query = graphql`
  query($slug: String!) {
    allSanityPdf(filter: { slug: { current: { eq: $slug } } }) {
      nodes {
        _id
        categoryReferences {
          categoryReference {
            category
          }
        }
        title
        link
        slug {
          current
        }
        tipoPdf
        image {
          crop {
            _key
            _type
            top
            bottom
            left
            right
          }
          hotspot {
            _key
            _type
            x
            y
            height
            width
          }
          asset {
            _id
          }
        }
        _rawCenteredText
        _rawShortDescription
        _rawDescription
      }
    }
  }
`;
