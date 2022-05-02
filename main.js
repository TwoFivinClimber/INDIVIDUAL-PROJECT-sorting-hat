import { students } from "./data.js";
import { newStudents } from "./data.js";
import { voldArmy } from "./data.js";

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
const photos = [];

const renderToDom = (divId, textToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToRender;
};

const introCard = () => {
  let domstring = "";
  domstring = `<div class="card intro-card" id="intro-card">
  <div class="card-body">
    <h5 class="card-title">Welcome to Hogwarts</h5>
    <p class="card-text">"You were put here on this earth to achieve your greatese self, to live out your purpouse, and to do it courageously."</p>
    <a href="#" id="lets-go" class="btn btn-primary">Lets Go!</a>
  </div>
</div>`;
  renderToDom("#intro", domstring);
};

const introImg = () => {
  let domString = "";
  domString = `<img
      src="images/dumbledore.jpg" id="dumb-img" 
      alt="dumbledore gazing upon students in hall"
    ></img>`;
  renderToDom("#intro-img", domString);
};

const nameForm = () => {
  let domstring = "";
  domstring = `<form class="input-group mb-3" id="student-form" >
<input type="text" id="student-name" class="form-control" placeholder="Enter Your Name" aria-label="First Year Name" aria-describedby="button-addon2">
<button class="btn btn-outline-secondary" type="submit" value="submit" id="findHouse-btn">Find Your House</button>
</form>`;
  renderToDom("#name-form", domstring);
};

const houseBtns = (arr) => {
  let domString = "";
  domString += `
  <div class="dropdown">
   <a class="btn btn-secondary dropdown-toggle house-btn" href="#" role="button" id="allBtn" data-bs-toggle="dropdown" aria-expanded="false">
     ALL
   </a>
   <ul id="allList" class="dropdown-menu" aria-labelledby="dropdownMenuLink">
   </ul>
 </div>
 <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle house-btn" href="#" role="button" id="gryBtn" data-bs-toggle="dropdown" aria-expanded="false">
    Gryffindoor
  </a>
  <ul id="gryList" class="dropdown-menu" aria-labelledby="dropdownMenuLink">
  </ul>
</div>
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle house-btn" href="#" role="button" id="slyBtn" data-bs-toggle="dropdown" aria-expanded="false">
    Slytherin
  </a>
  <ul id="slyList" class="dropdown-menu" aria-labelledby="dropdownMenuLink">
  </ul>
</div>
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle house-btn" href="#" role="button" id="hufBtn" data-bs-toggle="dropdown" aria-expanded="false">
    Hufflepuff
  </a>
  <ul id="hufList" class="dropdown-menu" aria-labelledby="dropdownMenuLink">
  </ul>
</div>
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle house-btn" href="#" role="button" id="ravBtn" data-bs-toggle="dropdown" aria-expanded="false">
    Ravenclaw
  </a>

  <ul id="ravList" class="dropdown-menu" aria-labelledby="dropdownMenuLink">
  </ul>
</div>`;

  //`<button type="button" class="btn btn-primary house-btn">All</button>
  // <button type="button" class="btn btn-secondary house-btn">Gryffindor 🦁</button>
  // <button type="button" class="btn btn-success house-btn">Ravenclaw 🦅</button>
  // <button type="button" class="btn btn-danger house-btn">Hufflepuff 🦡</button>
  // <button type="button" class="btn btn-warning house-btn">Slytherin 🐍</button>`;
  renderToDom("#houses-fltr", domString);
};

const houseRslt = (arr) => {
  let domString = "";
  for (let i of arr)
    domString += `<div id="student-card" class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${i.name}</h5>
        <p class="card-text">Was placed into ${i.house}</p>
        <p class="card-text"><small class="text-muted">Blurb about the house</small></p>
        <button type="button" id="expel--${i.id}" class="btn btn-dark">Expel</button>
      </div>
    </div>
  </div>
</div>`;
  renderToDom("#house-rslt", domString);
};

const voldemort = (arr) => {
  let domString = "";
  for (let i of voldArmy) {
    domString += `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="..." class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${i.name}</h5>
          <p class="card-text">Was expelled into ${i.house}</p>
          <p class="card-text"><small class="text-muted">We shal never speak your name again.</small></p>
        </div>
      </div>
    </div>
  </div>`;
    renderToDom("#voldemort", domString);
  }
};

const filterFunction = () => {
  document.querySelector("#houses-fltr").addEventListener("click", (e) => {
    if (e.target.id === "allBtn") {
      console.log();
    }
    if (e.target.id === "gryBtn") {
      console.log("Gry drop pressed");
    }
    if (e.target.id === "slyBtn") {
      console.log("Sly drop pressed");
    }
    if (e.target.id === "hufBtn") {
      console.log("huf drop pressed");
    }
    if (e.target.id === "ravBtn") {
      console.log("Rav drop pressed");
    }
  });
};

const letsGo = () => {
  document.querySelector("#intro-card").addEventListener("click", (e) => {
    if (e.target.id === "lets-go") {
      document.querySelector("#lets-go").style.display = "none";
      document.querySelector("#dumb-img").style.display = "none";
      nameForm();
      houseBtns();
      filterFunction();
    }
  });
};

const findHouse = () => {
  document.querySelector("#name-form").addEventListener("click", (e) => {
    if (e.target.id === "findHouse-btn") {
      const newStudent = {
        id: students[students.length - 1].id + 1,
        name: document.querySelector("#student-name").value,
        house: houses[Math.floor(Math.random() * 4)],
      };
      newStudents.push(newStudent);
      students.push(newStudent);
      document.querySelector("#student-form").reset();
    }
    houseRslt(newStudents);
  });
};

const expelStudent = () => {
  document.querySelector("#house-rslt").addEventListener("click", (e) => {
    if (e.target.id) {
      const [method, id] = e.target.id.split("--");
      const newIndex = newStudents.findIndex((find) => find.id === Number(id));
      const studentIndex = students.findIndex((find) => find.id === Number(id));
      if (e.target.id.includes("expel")) {
        newStudents[newIndex].house = "Voldemorts Army";
        students[studentIndex].house = "Voldemorts Army";
        voldArmy.push(newStudents[newIndex]);
        newStudents.splice(newIndex, 1);
      }
      houseRslt(newStudents);
      voldemort(voldArmy);
    }
  });
};

introCard();
introImg();
letsGo();
findHouse();
expelStudent();
