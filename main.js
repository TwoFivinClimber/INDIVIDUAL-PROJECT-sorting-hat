import { students } from "./data.js";
import { newStudents } from "./data.js";
import { voldArmy } from "./data.js";

const renderToDom = (divId, textToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToRender;
};

const introCard = () => {
  let domstring = "";
  domstring = `<div class="card intro-card" id="intro-card">
  <div class="card-body">
    <h1 class="card-title">Welcome to Hogwarts</h1>
    <p class="card-text">"You were put here on this earth to achieve your greatese self, to live out your purpouse, and to do it courageously."</p>
    <p id="intro-text" class="intro-text"></p>
    <a href="#" id="lets-go" class="btn btn-primary">Lets Go!</a>
  </div>
  </div>`;
  renderToDom("#intro", domstring);
};

const introImg = () => {
  let domString = "";
  domString = `<img src="images/dumbledore.jpg" class="dumb-img" id="dumb-img" 
      alt="dumbledore gazing upon students in hall"
    ></img>`;
  renderToDom("#intro-img", domString);
};

const nameForm = () => {
  let domstring = "";
  domstring = `<form class="input-group mb-3" id="student-form">
   <input type="text" id="student-name" class="form-control" placeholder="Enter Your Name" required />
   <button class="btn btn-outline-secondary" type="submit" value="submit" id="findHouse-btn">Find Your House</button>
   </form>`;
  renderToDom("#name-form", domstring);
};

const houseBtns = () => {
  let domString = "";
  domString = `<button id="allBtn" type="button" class="btn btn-dark">All Students</button>
  <button id="gryBtn" type="button" class="btn btn-danger">Gryffindoor</button>
  <button id="slyBtn" type="button" class="btn btn-success">Slytherin</button>
  <button id="hufBtn" type="button" class="btn btn-warning">Hufflepuff</button>
  <button id="ravBtn" type="button" class="btn btn-primary">Ravenclaw</button>`;
  renderToDom("#houses-fltr", domString);
};

const cardRender = (arr, divId) => {
  let domString = `<h2 id="header">Students</h2>`;
  for (let i of arr) {
    const gryHouse = i.house === "Gryffindor";
    const slyHouse = i.house === "Slytherin";
    const hufHouse = i.house === "Hufflepuff";
    const ravHouse = i.house === "Ravenclaw";
    domString += `<div id="student-card" class="card mb-3 student-card">
  <div class="row g-0">
    <div class="col-md-4">
      <img src=${gryHouse ? "images/gryffindor.jpg" : ""} ${
      slyHouse ? "images/slytherin.jpg" : ""
    } ${hufHouse ? "images/hufflepuff.jpg" : ""} ${
      ravHouse ? "images/ravenclaw.jpg" : ""
    } class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${i.name}</h5>
        <p class="card-text">Was placed into ${i.house}</p>
        <p class="card-text"><small class="text-muted"></small></p>
        <button type="button" id="expel--${
          i.id
        }" class="btn btn-dark expelBtn">Expel</button>
      </div>
    </div>
  </div>
</div>`;
  }
  renderToDom(divId, domString);
};

const voldemort = (arr) => {
  let domString = "<h2>Expelled</h2>";
  for (let i of voldArmy) {
    domString += `<div id="student-card" class="card mb-3 student-card">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="images/voldemort.jpg" id ="voldyImg" class="img-fluid rounded-start" alt="voldemorts face">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${i.name}</h5>
          <p class="card-text">Was expelled into ${i.house}</p>
          <p class="card-text"><small class="text-muted">We shal never speak their name again.</small></p>
        </div>
      </div>
    </div>
  </div>`;
    renderToDom("#expelled", domString);
  }
};

const houseFilter = () => {
  document.querySelector("#houses-fltr").addEventListener("click", (e) => {
    if (e.target.id === "allBtn") {
      cardRender(students, "#house-div");
    }
    if (e.target.id === "gryBtn") {
      const gryStudents = students.filter(
        (find) => find.house === "Gryffindor"
      );
      cardRender(gryStudents, "#house-div");
    }
    if (e.target.id === "slyBtn") {
      const slyStudents = students.filter((find) => find.house === "Slytherin");
      cardRender(slyStudents, "#house-div");
    }
    if (e.target.id === "hufBtn") {
      const hufStudents = students.filter(
        (find) => find.house === "Hufflepuff"
      );
      cardRender(hufStudents, "#house-div");
    }
    if (e.target.id === "ravBtn") {
      const ravStudents = students.filter((find) => find.house === "Ravenclaw");
      cardRender(ravStudents, "#house-div");
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
      houseFilter();
      changeText("See what the sorting hat has to say about you", "intro-text");
    }
  });
};

const findHouse = () => {
  const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
  document.querySelector("#name-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const newStudent = {
      id: students[students.length - 1].id + 1,
      name: document.querySelector("#student-name").value,
      house: houses[Math.floor(Math.random() * 4)],
    };

    newStudents.push(newStudent);
    students.push(newStudent);
    document.querySelector("#student-form").reset();
    newStudents.sort((a, b) => a.name.localeCompare(b.name));
    cardRender(newStudents, "#house-div");
    changeText("New Students", "header");
  });
};

const changeText = (str, divId) => {
  document.getElementById(divId).innerHTML = str;
};

const expelStudent = () => {
  document.querySelector("#house-div").addEventListener("click", (e) => {
    if (e.target.id) {
      const [method, id] = e.target.id.split("--");
      const newIndex = newStudents.findIndex((find) => find.id === Number(id));
      const studentIndex = students.findIndex((find) => find.id === Number(id));
      if (e.target.id.includes("expel") && studentIndex >= !students.student) {
        students[studentIndex].house = "Voldemorts Army";
        voldArmy.push(students[studentIndex]);
        students.splice(studentIndex, 1);
        newStudents.splice(newIndex, 1);
        cardRender(newStudents, "#house-div");
        voldemort(voldArmy, "#voldemort");
        changeText("New Students", "header");
      } else if (e.target.id.includes("expel")) {
        students[studentIndex].house = "Voldemorts Army";
        voldArmy.push(students[studentIndex]);
        students.splice(studentIndex, 1);
        cardRender(newStudents, "#house-div");
        voldemort(voldArmy, "#voldemort");
        changeText("New Students", "header");
      } else {
      }
    }
  });
};

function startApp() {
  introCard();
  introImg();
  letsGo();
  findHouse();
  expelStudent();
}

startApp();
