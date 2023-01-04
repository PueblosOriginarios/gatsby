import React, { useCallback, useEffect, useState } from "react";
import { Page, Card } from "../components/index";
import { graphql } from "gatsby";
import "./Materiales.scss";

const Materiales = ({ data }) => {
  const pageInfo = data?.allSanityMateriales?.nodes[0];
  const categories = data?.allSanityCategories?.nodes;
  const pdfs = data?.allSanityPdf?.nodes;

  const handleClick = (e) => {
    if (e.target.className === "Category Button Selected") {
      e.target.className = "Category Button";
      setSelectedCategories(
        selectedCategories.filter((item) => item !== e.target.name)
      );
    } else {
      e.target.className = "Category Button Selected";
      setSelectedCategories([...selectedCategories, e.target.name]);
    }
  };

  const buttons = categories.map((category) => (
    <button
      key={category?._id}
      className={`Category Button `}
      onClick={handleClick}
      name={category?.category}
    >
      {category?.category}
    </button>
  ));

  const [pdfCards, setPdfCards] = useState(pdfs);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filterPdfs = useCallback(() => {
    console.log("filtering");
    if (selectedCategories.length === 0) {
      setPdfCards(pdfs);
    } else {
      setPdfCards(
        pdfs.filter((item) => {
          return item.categoryReferences.some((elem) =>
            selectedCategories.includes(elem.categoryReference.category)
          );
        })
      );
    }
  }, [pdfs, selectedCategories]);

  useEffect(() => {
    console.log("useEffect");
    filterPdfs();
  }, [selectedCategories, filterPdfs]);

  const cards = pdfCards.map((pdf) => {
    const cardData = {
      title: pdf?.title,
      image: pdf?.image,
      _rawContent: pdf?._rawShortDescription,
      slug: `pdf/${pdf?.slug?.current}`,
    };
    return <Card data={cardData} key={pdf?._id} />;
  });

  return (
    <Page>
      <section className="Materiales">
        <div className="empty-left"></div>
        <div>
          <h3>{pageInfo?.title}</h3>
          <div className="CategoriesContainer">{buttons}</div>
          <div className="CardsContainer">{cards}</div>
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
    allSanityPdf(filter: { tipoPdf: { in: [$slug, "ambos"] } }) {
      nodes {
        _id
        title
        slug {
          current
        }
        tipoPdf
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
