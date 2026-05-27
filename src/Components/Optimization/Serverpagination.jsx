import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function ServerPagination() {
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 10;

  const [searchParams, setSearchParams] = useSearchParams();

  // Get current page from URL (?page=2)
  const currentPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${itemsPerPage}`
      );

      const json = await res.json();

      // Total count comes from headers
      const total = res.headers.get("x-total-count");

      setData(...data, json);
      setTotalCount(Number(total));
      setLoading(false);
    };

    fetchData();
  }, [currentPage]);

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const goToPage = (page) => {
    setSearchParams({ page });
  };

  if (loading) {
    return (
      <div className="flex flex-col gap-4 p-4">
        {new Array(itemsPerPage).fill(0).map((_, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg shadow-sm animate-pulse bg-white"
          >
            {/* Title Skeleton
            <div className="h-5 w-1/3 bg-gray-300 rounded mb-3"></div> */}

            {/* Email Skeleton */}
            <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>

            {/* Extra Line Skeleton */}
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
      // <div className="h-screen flex justify-center items-center">
      //   <div className="border-8 border-green-500 border-t-transparent  animate-spin h-10 w-10 rounded-full">
      //   </div>
      // </div>
    );
  }


  return (
    <div style={{ padding: "20px" }}>
      <h2>Server-Side Pagination (Query Params)</h2>

      {data.map((user) => (
        <div
          key={user.id}
          style={{
            padding: "8px",
            margin: "8px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
        </div>
      ))}

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        {/* Prev */}
        <button
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => goToPage(page)}
              style={{
                padding: "5px 10px",
                background: currentPage === page ? "#000" : "#fff",
                color: currentPage === page ? "#fff" : "#000",
                border: "1px solid #ccc",
              }}
            >
              {page}
            </button>
          );
        })}

        {/* Next */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ServerPagination;