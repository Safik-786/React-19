import React, { useEffect, useState } from "react";

function ServerPagination() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://6901f2bfb208b24affe460ef.mockapi.io/users?page=${currentPage}&limit=${itemsPerPage}`
      );

      const totalCount = res.headers.get("x-total-count"); // total records
      setTotalPages(Math.ceil(totalCount / itemsPerPage));

      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, [currentPage]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Server-Side Pagination</h2>


            {
                console.log(data)
            }

      {/* Render users */}
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

      {/* Pagination controls */}
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
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

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ServerPagination;
