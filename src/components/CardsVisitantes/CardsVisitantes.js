import React from "react";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";
import "./CardsVisitants.scss";

const CardsVisitantes = ({ data }) => {
  console.log(data);
  console.log("HOLa");
  const cardsComponent = data?.map((article) => {
    const articleData = {
      title: article?.title,
      slug: `noticias/${article?.slug?.current}`,
      image: article?.imageHeader,
    };
    return <Card data={articleData} key={article?.id} />;
  });

  return (
    <div className='cardsVisitants'>
      <div className='contentCardsText'>
        <div className='empty-left'></div>
        <h6 className='title-small'>
          <span className='borderB'>Visitantes</span>
        </h6>
        <div className='empty-right'></div>
      </div>
      <div className='paginationVisitant'>
        <Pagination posts={cardsComponent} postPerPage={3} />
      </div>
    </div>
  );
};

export default CardsVisitantes;
