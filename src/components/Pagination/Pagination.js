import React, { useRef, useState } from "react"
import { Link } from "gatsby"
import "./Pagination.scss"
import RArrowDark from "../../images/RArrow-dark.svg"
import RArrowLight from "../../images/RArrow-light.svg"
import LArrowDark from "../../images/LArrow-dark.svg"
import LArrowLight from "../../images/LArrow-light.svg"

const Pagination = ({ posts, postPerPage, inicialState }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(`${postPerPage}`)
  const pageNumbers = []
  const wrapperRef = useRef(null)

  for (let i = 1; i <= Math.ceil(posts?.length / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const indexOfLastPost = inicialState
    ? 1 * postsPerPage
    : currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
    wrapperRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div ref={wrapperRef}>
      <div className="CardsContent">{currentPosts}</div>
      <nav>
        <ul className="Pagination">
          <li className="Pagination__item">
            {currentPage !== 1 ? (
              <Link
                onClick={() => paginate(currentPage - 1)}
                to="#Articles"
                style={{ paddingTop: "0.2rem" }}
              >
                <img src={LArrowDark} alt="flecha izquierda" />
              </Link>
            ) : (
              <img
                src={LArrowLight}
                alt="flecha izquierda"
                style={{ paddingTop: "0.2rem" }}
              />
            )}
          </li>
          {pageNumbers.map(number => (
            <>
              {number === currentPage ? (
                <li key={number} className="Pagination__item active-page">
                  <Link
                    onClick={() => paginate(number)}
                    to="#Articles"
                    className={`Pagination__link`}
                  >
                    {number}
                  </Link>
                </li>
              ) : (
                <li key={number} className="Pagination__item">
                  <Link
                    onClick={() => paginate(number)}
                    to="#Articles"
                    className={`Pagination__link `}
                  >
                    {number}
                  </Link>
                </li>
              )}
            </>
          ))}
          <li className="Pagination__item">
            {currentPage !== pageNumbers[pageNumbers.length - 1] ? (
              <Link
                onClick={() => paginate(currentPage + 1)}
                to="#Articles"
                style={{ paddingTop: "0.2rem" }}
              >
                <img src={RArrowDark} alt="flecha derecha" />
              </Link>
            ) : (
              <img
                src={RArrowLight}
                alt="flecha derecha"
                style={{ paddingTop: "0.2rem" }}
              />
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
