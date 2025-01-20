//function SiteLoader{
// const [data, setData] = useState(null);
// const [error, setError] = useState(null);

// useEffect(() => {
//   fetch("./src/Header/header.jsx")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok " + response.statusText);
//       }
//       return response.json();
//     })
//     .then((jsonData) => {
//       setData(jsonData);
//       console.log(jsonData)
//     })
//     .catch((err) => {
//       console.error("Error fetching JSON data: ", err);
//       setError(err.message);
//     });
// }, []);

// if (error) {
//   return <div>Error: {error}</div>;
// }

// if (!data) {
//   return <div>Loading...</div>;
// }
