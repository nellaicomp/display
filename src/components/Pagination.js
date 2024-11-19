import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  // Generate pagination buttons dynamically
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          style={{
            margin: '0 5px',
            padding: '5px 10px',
            backgroundColor: currentPage === i ? '#007bff' : '#f1f1f1',
            color: currentPage === i ? '#fff' : '#000',
            border: '1px solid #ddd',
            borderRadius: '3px',
          }}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div style={{ marginTop: '10px', textAlign: 'center' }}>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        style={{ marginRight: '5px' }}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        style={{ marginLeft: '5px' }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
