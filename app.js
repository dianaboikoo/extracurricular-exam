"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
   const projects = await getProjects();
  console.log(projects);
  
  displayProjectsGrid(projects);
}


async function getProjects() {
  const response = await fetch("https://test.dianaboiko.dk/wp-json/wp/v2/projects?acf_format=standard");
  const data = await response.json();
  return data;
}


function displayProjectsGrid(projects){
const projectsGrid = document.querySelector("#projects-grid");

for (const project of projects) {

projectsGrid.insertAdjacentHTML(
  "beforeend",
  /*html*/ 
  
  `
  <article class="grid-item">
<img src="${project.acf.image}" alt="${project.title.rendered}" />
    <h2>${project.title.rendered}</h2>
    <p class="projecttype">${project.acf.project_type}</p>
     <p class="team">${project.acf.team}</p>
     <p class="descriptiontext">Description</p>
      <p class="description">${project.acf.description}</p>
    <p class = "link"><a href="${project.acf.link}" target = "_blank">Visit the Project</a></p>
  </article>

  `


);

}
}
