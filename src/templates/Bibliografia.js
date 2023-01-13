import React from "react";
import { Page} from "../components/index";
import { graphql } from "gatsby";
import "./Bibliografia.scss";
import { PortableText } from "@portabletext/react";
import Pdf from  "../components/Pdf/Pdf";

const Bibliografia = ({ data }) => {
    const { title } = data?.allSanityBibliografia?.nodes[0];
    const  bibliografia = data?.allSanityComponentbibliografia?.nodes;
  

    bibliografia.sort(function (a, b) {
        if (a.author.toLowerCase() > b.author.toLowerCase()) {
            return 1;
        }
        if (a.author.toLowerCase() < b.author.toLowerCase()) {
          return -1;
        }
        return 0;
    });
    

    return (
      
          <>
      <Page>
        { <section className='bibliografia'>
          <div className='bibliografiaHeader'>
            <div className='empty-left'></div>

            <div className='titleContent'>
              <div></div>
              {title && (
                <>
                  <h5 className='title'>{title}</h5>
                  <div className='vacio'></div>
                </>
              )}
            </div>
            <div className='empty-right'></div>
          </div>
          {bibliografia.map((item, index) => (
          <div>
            <h5 className='title'>{item.title}</h5>
            <p> Por {item.author}</p>
            <PortableText value={item._rawRichTextBody} /> 
            <Pdf data={item?.referenceBibliografia} />
          </div>
        ))}
        </section>}
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
      }
    }

    allSanityComponentbibliografia(filter: { filtroBilbliografia:{  in: [$slug, "ambos"]  } }) {
      nodes {
        author
        title
        _rawRichTextBody
        filtroBilbliografia
        referenceBibliografia {
          link
          tipoPdf
          }
        }
    }

  }
`;