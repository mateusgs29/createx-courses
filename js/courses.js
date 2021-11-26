const url = "https://my-json-server.typicode.com/VittorGuih/json-teste/db";

const divCourses = document.getElementById("courses-list");
let rows = [];
let indexRow = -1;

const getData = () => {
  axios
    .get(url)
    .then((response) => response.data["Course"])
    .then((courses) => {
      courses.map((course, index) => {
        // if para criar row a cada dois elementos
        if (index % 2 == 0) {
          const newRow = document.createElement("div");
          newRow.className = "row";
          rows.push(newRow);
          indexRow++;
        }
        
        const colorBadge = badgeColors(course.courseName)

        rows[indexRow].insertAdjacentHTML("beforeend", 
        `
          <div class="col-md-6">
            <div class="card my-2 my-md-3 course-card">
              <div class="row no-gutters">
                <div class="col-4">
                  <img class="card-img" src=${course.img[0].url} alt=${course.img[0].title}>
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <span class="mb-2 badge ${colorBadge}">${course.courseName}</span>
                    <p class="card-text course-description">${course.description}</p>
                    <p class="card-text card-details"><span>$${course.price}</span> | ${course.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `)
      });

      // adiciona as rows na div
      rows.map(row => {
        divCourses.appendChild(row)
      })
    })
    .catch((err) => console.error(err));
};

// Definir cor dos badges
const badgeColors = (color) => {
  switch (color) {
    case "Marketing":
      return "green"
    case "Management":
      return "blue"
    case "HR & Recruting":
      return "orange"
    case "Design":
      return "pink"
  }
}

getData();
