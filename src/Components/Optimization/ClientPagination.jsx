import React, { useEffect, useState } from "react";

function ClientPagination() {
  const [data, setData] = useState([]);          // store entire dataset (fetched once)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;                        // showing 5 items per page

  // Fetch once when component loads
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      setData(json);                             // save full data (we paginate this locally)
    };

    fetchData();
  }, []);


  // Calculate pagination indexes
  const lastItemIndex = currentPage * itemsPerPage;      // 1 → 5, 2 → 10, 3 → 15
  const firstItemIndex = lastItemIndex - itemsPerPage;   // 1 → 0, 2 → 5, 3 → 10

  // Slice only the items for the current page
  const currentItems = data.slice(firstItemIndex, lastItemIndex);

  // Total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Client-Side Pagination (Fetched Once)</h2>

      {/* Display only paginated items */}
      {currentItems.map((user) => (
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

      {/* Pagination Buttons */}
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages).keys()].map((num, index) => {
          const page = num + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              style={{
                padding: "5px 10px",
                background: currentPage === page ? "#000" : "#fff",
                color: currentPage === page ? "#fff" : "#000",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              {page}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ClientPagination;
