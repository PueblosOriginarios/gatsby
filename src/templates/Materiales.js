import React, { useEffect, useState } from "react";
import { Page, Card } from "../components/index";
import { graphql } from "gatsby";
import "./Materiales.scss";

const Materiales = ({ data }) => {
  const pageInfo = data?.allSanityMateriales?.nodes[0];
  const categories = data?.allSanityCategories?.nodes;
  const pdfs = data?.allSanityPdf?.nodes;

  const [filteredPdfs, setFilteredPdfs] = useState(pdfs);
  const [pdfCards, setPdfCards] = useState([]);

  const categoriesButtons = categories?.map((category) => {
    return (
      <button
        key={category?._id}
        className="Category Button"
        onClick={() => {
          filterPdfs(category?.category);
        }}
      >
        {category?.category}
      </button>
    );
  });

  const filterPdfs = (category) => {
    setFilteredPdfs(
      pdfs.filter((pdf) => {
        let isCategory = false;
        pdf?.categoryReferences?.map((ref) => {
          isCategory =
            isCategory || ref?.categoryReference?.category === category;
        });
        return isCategory;
      })
    );

  };

  useEffect(() => {
    const filteredCards = filteredPdfs.map((pdf) => {
      const pdfSlug = `pdf/${pdf?.slug?.current}`;
      const cardData = {
        title: pdf?.title,
        image: pdf?.image,
        _rawContent: pdf?._rawShortDescription,
        slug: pdfSlug,
      };
      return <Card data={cardData} key={pdf?._id} />;
    });
    setPdfCards(filteredCards);
  }, [filteredPdfs]);

  return (
    <Page>
      <section className="Materiales">
        <div className="empty-left"></div>
        <div>
          <h3>{pageInfo?.title}</h3>
          <div className="CategoriesContainer">{categoriesButtons}</div>
          <div className="CardsContainer">{pdfCards}</div>
        </div>
        <div className="empty-right"></div>
      </section>
    </Page>
  );
};

export default Materiales;

export const query = graphql`
  query($slug: String!) {
    allSanityMateriales(filter: { tipoMateriales: { eq: $slug } }) {
      nodes {
        title
        tipoMateriales
      }
    }
    allSanityPdf {
      nodes {
        _id
        title
        slug {
          current
        }
        categoryReferences {
          categoryReference {
            category
          }
        }
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
        _rawShortDescription
      }
    }
    allSanityCategories {
      nodes {
        _id
        category
      }
    }
  }
`;
