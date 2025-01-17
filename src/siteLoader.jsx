import React, { useState, useEffect } from 'react';

export function SiteLoader() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("./public/assets/locales/static.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((err) => {
        console.error("Error fetching JSON data: ", err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{data.header.home}</p>
      <p>{data.header.projects}</p>
      <p>{data.header.about}</p>
      <p>{data.header.contacts}</p>
    </div>
  );
}
