import students from "./data.js";

console.log("connected");

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
  domstring = `<div class="input-group mb-3">
  <input type="text" id="student-name" class="form-control" placeholder="Enter Your Name" aria-label="First Year Name" aria-describedby="button-addon2">
  <button class="btn btn-outline-secondary" type="submit" value="submit" id="findHouse-btn">Find Your House</button>
</div>`;
  renderToDom("#name-form", domstring);
};
const housesFltr = () => {
  let domString = "";
  domString = `<button type="button" class="btn btn-primary house-btn">All</button>
<button type="button" class="btn btn-secondary house-btn">Gryffindor 🦁</button>
<button type="button" class="btn btn-success house-btn">Ravenclaw 🦅</button>
<button type="button" class="btn btn-danger house-btn">Hufflepuff </button>
<button type="button" class="btn btn-warning house-btn">Slytherin 🐍</button>`;
  renderToDom("#houses-fltr", domString);
};

const houseRslt = (obj) => {
  let domString = "";
  domString = `<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${obj.name}</h5>
        <p class="card-text">Was placed into ${obj.house}</p>
        <p class="card-text"><small class="text-muted">Blurb about the house</small></p>
      </div>
    </div>
  </div>
</div>`;
  renderToDom("#house-rslt", domString);
};

const letsGo = () => {
  document.querySelector("#intro-card").addEventListener("click", (e) => {
    if (e.target.id === "lets-go") {
      document.querySelector("#lets-go").style.display = "none";
      document.querySelector("#dumb-img").style.display = "none";
      nameForm();
      housesFltr();
    }
  });
};

const houses = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"];
const photos = [];

const findHouse = () => {
  document.querySelector("#name-form").addEventListener("click", (e) => {
    if (e.target.id === "findHouse-btn") {
      const newStudent = {
        id: students[students.length - 1].id + 1,
        name: document.querySelector("#student-name").value,
        house: houses[Math.floor(Math.random() * 4)],
      };
      houseRslt(newStudent);
      students.push(newStudent);
    }
  });
};

introCard();
introImg();
letsGo();
findHouse();
