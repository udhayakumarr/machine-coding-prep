import { useState, useMemo } from "react";
import Pagination from "./pagination";

const ITEM_PER_PAGE = 10;

function Products({ productsList }) {
  const [currentPage, setCurrentPage] = useState(0);

  const filteredList = useMemo(() => {
    if (!Array.isArray(productsList)) return [];

    return productsList.slice(
      currentPage * ITEM_PER_PAGE,
      (currentPage + 1) * ITEM_PER_PAGE
    );
  }, [currentPage, productsList]);

  return (
    <>
      <div className="container">
        {filteredList?.map((list) => {
          return (
            <div className="card" key={list.id}>
              <span>{list?.title}</span>
              <img
                src={list?.thumbnail}
                alt={list?.title}
                width={100}
                height={100}
              />
            </div>
          );
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={productsList?.length || 0}
        pageSize={ITEM_PER_PAGE}
      />
    </>
  );
}

export default Products;
