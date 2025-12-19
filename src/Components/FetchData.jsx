import React, { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com";

function FetchData({ endpoint }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    setError(null);

    fetch(`${BASE_URL}/${endpoint}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });

  }, [endpoint]);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="p-4 bg-red-100 rounded-xl text-red-700">
        Error: {error.message}
      </div>
    );

  // Log safely
  console.log("Fetched Data:", data);

  return (
    <div className="p-4">
      {/* If data is a single object, wrap into array */}
      {Array.isArray(data)
        ? data.map((item) => (
            <div key={item.id} className="border m-3 p-4 rounded-xl">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))
        : data && (
            <div className="border m-3 p-4 rounded-xl">
              <h3 className="font-bold text-lg">{data.title}</h3>
              <p>{data.body}</p>
            </div>
          )}
    </div>
  );
}

export default FetchData;
