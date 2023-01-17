import React, { useCallback, useEffect, useState } from "react";
import { Page, Card } from "../components/index";
import { Seo } from "../components/seo";
import { graphql } from "gatsby";
import "./Materiales.scss";

const Materiales = ({ data }) => {
  const pageInfo = data?.allSanityMateriales?.nodes[0];
  const categories = data?.allSanityCategories?.nodes;
  const pdfs = data?.allSanityPdf?.nodes;
  const title = pageInfo?.title;

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
    <>
      <Seo
        title='Materiales'
        description='Página con información de la historia del pueblo originario'
        keywords='Historia, Información, Pueblos, Originarios'
      />
      <Page>
        <section className='MaterialesSection'>
          <div className='Header'>
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
            <div className='empty-right'></div>
          </div>

          <div className='MaterialesContent'>
            <div className='CategoriesContainer'>{buttons}</div>
            {cards.length !== 0 && (
              <div className='MaterialesCards'>
                <div className='CardsContainer py-4'>{cards}</div>
              </div>
            )}
          </div>
        </section>
      </Page>
    </>
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
