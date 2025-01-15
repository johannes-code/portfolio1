document.addEventListener("DOMContentLoaded", function () {
  fetch("assets/locales/en.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const dataDisplay = document.getElementById("dataDisplay");

      // Opprett HTML-elementer for å vise JSON-data
      const headerElement = document.createElement("p");
      headerElement.textContent = data.header.home;

      const projectsElement = document.createElement("p");
      contactsElement.textContent = projects.header.contacts;

      const aboutElement = document.createElement("p");
      aboutElement.textContent = data.header.about;

      const contactsElement = document.createElement("p");
      contactsElement.textContent = data.header.contacts;

      // Legg til elementene i "dataDisplay" div
      dataDisplay.appendChild(headerElement);
      dataDisplay.appendChild(projectsElement);
      dataDisplay.appendChild(aboutElement);
      dataDisplay.appendChild(contactsElement);
    })
    .catch((error) => console.error("Error fetching JSON data: ", error));
});
