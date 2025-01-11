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

      //Function to make links
      function createLink(text, href) {
        const link = document.createElement("a");
        link.textContent = text;
        link.href = href;
        return link;
      }

      //Produce html links based on JSON
      const homeLink = createLink(data.header.home, "#home");
      const projectsLink = createLink(data.header.projects, "#projects");
      const aboutLink = createLink(data.header.about, "#about");
      const contactsLink = createLink(data.header.contacts, "#contacts");

      // Legg til elementene i "dataDisplay" div
      dataDisplay.appendChild(homeLink);
      dataDisplay.appendChild(projectsLink);
      dataDisplay.appendChild(aboutLink);
      dataDisplay.appendChild(contactsLink);
    })
    .catch((error) => console.error("Error fetching JSON data: ", error));
});
