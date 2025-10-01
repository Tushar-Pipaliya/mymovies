import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePageClick = (page) => {
    if (page !== currentPage) onPageChange(page);
  };

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="px-8 py-2 rounded-full bg-black text-white font-semibold border-primary border-2 text-sm transition duration-300"
      >
        Prev
      </button>

      {/* Page Numbers */}
      <div className="flex items-center mx-4">
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`px-8 py-2 rounded-full bg-primary font-semibold border-2 border-primary text-sm transition duration-300 ${
                page === currentPage
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-black hover:text-white"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="px-8 py-2 rounded-full bg-black font-semibold border-primary text-white border-2 text-sm transition duration-300 "
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
