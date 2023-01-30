import React from "react";
import { Page } from "../components/index";
import { graphql } from "gatsby";
import { Seo } from "../components/seo";
import { PortableText } from "@portabletext/react";
import SanityImage from "gatsby-plugin-sanity-image";
import "./Bibliografia.scss";

const Bibliografia = ({ data }) => {
  const { title, imageHeader } = data?.allSanityBibliografia?.nodes[0];
  const bibliografia = data?.allSanityComponentbibliografia?.nodes;

  bibliografia.sort(function (a, b) {
    if (a.author?.toLowerCase() > b.author?.toLowerCase()) {
      return 1;
    }
    if (a.author?.toLowerCase() < b.author?.toLowerCase()) {
      return -1;
    }
    return 0;
  });

  return (
    <>
     <Seo
        title='Bibliografia'
        description='Página con información de la bibliografía del pueblo originario'
        keywords='Bibliografía, Información, Pueblos, Originarios, Chané, Guaraní'
      />
      <Page>
        {
          <section className='bibliografia'>
            <div className='bibliografiaHeader'>
              <div className='empty-left'></div>
              <div className='mb-lg-4'>
                {imageHeader && (
                  <SanityImage
                    {...imageHeader}
                    alt='Image Art'
                    className='imageHeader'
                  />
                )}
                <div className='titleContent mb-4'>
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
            </div>

            {bibliografia.map((item, index) => (
              <div className='contentBibliografia' key={index}>
                <div className='empty-left'></div>
                <div className='textBibliografia'>
                  <div></div>
                  <div>
                    <div className='imageMainContainer'>
                      <div className='imageContainer'>
                        {item.image && (
                          <SanityImage {...item.image} alt='Image Art' />
                        )}
                      </div>
                      <div className='textContanier'>
                        <h5 className='title headline-small' >{item.title}</h5>
                        <p> Por {item.author}</p>
                        <PortableText value={item._rawRichTextBody} />
                        {item?.link && (
                           <a
                            className='Button'
                            href={item?.link}
                            target='_blank'
                            rel='noreferrer noopener'
                          >
                          <small>Descargar PDF</small>
                          </a>
                        )}
                      </div>
                    </div>
                    <div className='line'></div>
                  </div>
                  <div></div>
                </div>
                <div className='empty-right'></div>
              </div>
            ))}
          </section>
        }
      </Page>
    </>
  );
};

export default Bibliografia;

export const query = graphql`
  query($slug: String!) {
    allSanityBibliografia(filter: { tipoBibliografia: { eq: $slug } }) {
      nodes {
        title
        tipoBibliografia
        imageHeader {
          asset {
            _id
          }
          crop {
            _key
            _type
            bottom
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

    allSanityComponentbibliografia(
      filter: { filtroBilbliografia: { in: [$slug, "ambos"] } }
    ) {
      nodes {
        author
        title
        image {
          asset {
            _id
          }
          crop {
            _key
            _type
            bottom
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
        _rawRichTextBody
        filtroBilbliografia
        link
      }
    }
  }
`;
