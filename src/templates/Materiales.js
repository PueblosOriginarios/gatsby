import React, { useCallback, useEffect, useState } from "react";
import { Page, Card } from "../components/index";
import { graphql } from "gatsby";
import "./Materiales.scss";

const Materiales = ({ data }) => {
  const pageInfo = data?.allSanityMateriales?.nodes[0];
  const categories = data?.allSanityCategories?.nodes;
  const pdfs = data?.allSanityPdf?.nodes;

  const [filteredPdfs, setFilteredPdfs] = useState(pdfs);
  const [pdfCards, setPdfCards] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoriesButtons, setCategoriesButtons] = useState([]);

  const addCategory = (category) => {
    if (selectedCategories?.includes(category)) {
      // if the category is already selected, remove it
      let temp = selectedCategories;
      temp.splice(temp.indexOf(category), 1);
      setSelectedCategories(temp);
    } else {
      setSelectedCategories(selectedCategories.concat(category));
    }
  };

  // Filter buttons
  const updateButtons = useCallback(() => {
    setCategoriesButtons(
      categories?.map((category) => {
        let selected = selectedCategories.includes(category?.category)
          ? "Selected"
          : "";
        return (
          <button
            key={category?._id}
            className={`Category Button ${selected}`}
            onClick={() => {
              addCategory(category?.category);
              updateButtons();
              updatePdfs();
            }}
          >
            {category?.category}
          </button>
        );
      })
    );
  }, [categories, selectedCategories]);

  const updatePdfs = () => {
    if (0 < selectedCategories.length) {
      // filter by category and type
      setFilteredPdfs(
        pdfs.filter((pdf) => {
          let isCategory = false;
          let isType =
            pdf?.tipoPdf === pageInfo?.tipoMateriales ||
            pdf?.tipoPdf === "ambos";
          pdf?.categoryReferences?.map((ref) => {
            isCategory =
              isCategory ||
              selectedCategories?.includes(ref?.categoryReference?.category);
            return isCategory;
          });
          return isCategory && isType;
        })
      );
    } else {
      setFilteredPdfs(
        pdfs.filter((pdf) => {
          let isType =
            pdf?.tipoPdf === pageInfo?.tipoMateriales ||
            pdf?.tipoPdf === "ambos";
          return isType;
        })
      );
    }
  };

  useEffect(() => {
    updateButtons();
    updatePdfs();
  }, [selectedCategories, updateButtons, updatePdfs]);

  // Cards rendered
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
