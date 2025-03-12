import './Pagination.css';
import React from 'react';

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handleAnterior = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleProximo = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='pagination-container'>
      <button
        className='pagination-button'
        onClick={handleAnterior}
        disabled={currentPage === 1}
      >
        Anterior
      </button>

      <span className="pagination-info">
        Página {currentPage} de {totalPages}
      </span>

      <button
        className="pagination-button"
        onClick={handleProximo}
        disabled={currentPage === totalPages}
      >
        Próximo
      </button>
    </div>
  );
};


export default Pagination;
