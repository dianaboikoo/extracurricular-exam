"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
   const projects = await getProjects(); //giving the JSON data to projects
  console.log(projects);
  
  displayProjectsGrid(projects);
}


async function getProjects() {
  const response = await fetch("https://test.dianaboiko.dk/wp-json/wp/v2/projects?acf_format=standard"); //fetching data from WordPress
  const data = await response.json(); 
  return data;
}


function displayProjectsGrid(projects){ //function to display received data in the Grid
const projectsGrid = document.querySelector("#projects-grid");//select the HTML element projects-grid and store it in the projectsGrid

for (const project of projects) { //going through every project in projects array

projectsGrid.insertAdjacentHTML( //Content adds in the last child of projectsGrid element
  "beforeend",
  /*html*/ 
  //embedding properties within the HTML and displaying each project's information in the grid
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
