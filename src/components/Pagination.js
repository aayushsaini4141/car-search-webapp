import React from 'react';

function Pagination({ totalPages, currentPage, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination flex justify-center mt-4">
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`bg-white w-7 m-2 text-black p-md rounded-lg shadow-md ${page === currentPage ? 'bg-black text-white active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
