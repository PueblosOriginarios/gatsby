import React from "react";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";

const CardEvento = ({ data }) => {
  const cardsComponent = data?.map((evento) => {
    const eventoData = {
      title: evento?.title,
      _rawContent: evento?._rawContenidoEvento,
      artists: evento?.iconEvento,
      shortText: evento?.shortText,
    };
    return <Card data={eventoData} key={evento?.id} />;
  });

  return (
    <>
      {data.length !== 0 ? (
        <div className='cardsVisitants'>
          <div className='contentCardsText'>
            <div className='empty-left'></div>
            <h6 className='title-small'>
              <span className='borderB'>Eventos</span>
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

export default CardEvento;
