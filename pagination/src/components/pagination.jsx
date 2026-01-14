function Pagination({ total, currentPage, setCurrentPage, pageSize }) {
  const totalPages = Math.ceil(total / pageSize);

  if (totalPages < 1) {
    return null;
  }

  const handleOnCurrentPage = (page) => {
    if (currentPage === page) return;
    setCurrentPage(page);
  };

  const handleOnPrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleOnNext = () => {
    if (currentPage + 1 < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <button
        disabled={currentPage === 0}
        onClick={handleOnPrev}
        className="pagination"
      >
        {"<"}
      </button>
      {[...Array(totalPages)].map((_, index) => {
        return (
          <button
            onClick={() => handleOnCurrentPage(index)}
            className="pagination"
            key={index}
            style={{
              background: index === currentPage ? "#c5c5c5" : "#f3f3f3",
            }}
          >
            {index + 1}
          </button>
        );
      })}
      <button
        onClick={handleOnNext}
        disabled={currentPage + 1 === totalPages}
        className="pagination"
      >
        {">"}
      </button>
    </div>
  );
}

export default Pagination;
