import React from "react";
import "./Pagination.css"; // Puedes crear un archivo de estilos si lo necesitas

export default function Pagination({ currentPage, totalPages, handlePaginate }) {
  const renderPageNumbers = () => {
    const visiblePages = [];
    const maxVisiblePages = 3;
    const totalPagesToShow = Math.min(totalPages, maxVisiblePages);

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }

    return visiblePages.map((page) => (
      <button
        key={page}
        onClick={() => handlePaginate(page)}
        className={page === currentPage ? 'active page-button' : 'page-button'}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="pagination">
      <button className='flechas' onClick={() => handlePaginate(1)}> {"<<"} </button>
      <button className='flechas' onClick={() => handlePaginate(Math.max(currentPage - 1, 1))}>{"<"}</button>
      {renderPageNumbers()}
      <button className='flechas' onClick={() => handlePaginate(Math.min(currentPage + 1, totalPages))}>{">"}</button>
      <button className='flechas' onClick={() => handlePaginate(totalPages)}>{">>"}</button>
    </div>
  );
}
