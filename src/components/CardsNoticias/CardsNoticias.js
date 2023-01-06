import React from "react";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";
import "./CardsNoticias.scss";

const CardsNoticias = ({ data }) => {
  const cardsComponent = data?.map((article) => {
    const articleData = {
      title: article?.title,
      slug: `noticias/${article?.slug?.current}`,
      image: article?.imageHeader,
      _rawContent: article?._rawRichText,
    };
    return <Card data={articleData} key={article?.id} />;
  });

  return (
    <>
      {data.length !== 0 ? (
        <div className='cardsVisitants'>
          <div className='contentCardsText'>
            <div className='empty-left'></div>
            <h6 className='title-small'>
              <span className='borderB'>Noticias</span>
            </h6>
            <div className='empty-right'></div>
          </div>
          <div className='paginationVisitant'>
            <Pagination posts={cardsComponent} postPerPage={3} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CardsNoticias;
