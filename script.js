// // loader
// const header = document.querySelector(".header");
// const loader = document.querySelector(".loader");
// const body = document.querySelector("body");
// setTimeout(() => {
//   header.classList.remove("none");
//   loader.classList.add("none");
//   body.style.backgroundImage = "none";
// }, 2000);

const closeX = document.querySelector(".close-x");
const section = document.querySelector(".create-plan-section");
const addButton = document.querySelector(".add-button");
const overlay = document.querySelector(".overlay");

addButton.addEventListener("click", () => {
  section.removeAttribute("hidden");
  overlay.removeAttribute("hidden");
});

closeX.addEventListener("click", () => {
  section.setAttribute("hidden", "true");
  overlay.setAttribute("hidden", "true");
});

const nameInput = document.querySelector(".name_input");
const submitButton = document.querySelector(".submit-button");
const descriptionInput = document.querySelector(".description_input");
const priorityInput = document.querySelector(".priority_input");
const statusInput = document.querySelector(".status_input");
// const myList = document.querySelector(".myList");

const listContent = document.querySelector(".list-content");

const createElementMine = (target) => {
  const dl = document.createElement("dl");
  dl.setAttribute("class", "myList");
  dl.classList.add("lb");

  let del = document.createElement("i");
  del.classList.add("fa", "fa-trash", "trash");

  const dt = document.createElement("dt");
  dt.innerHTML = nameInput.value;
  dt.appendChild(del);

  let save = document.createElement("i");
  save.classList.add("fas", "fa-check", "save");
  let edit = document.createElement("i");
  edit.classList.add("fas", "fa-edit", "edit");
  dt.appendChild(save);
  dt.appendChild(edit);

  const dd = document.createElement("dd");
  dd.innerHTML = `- ${descriptionInput.value}`;
  dd.classList.add("dd-style");

  dl.appendChild(dt).appendChild(dd);
  document.querySelector(target).appendChild(dl);

  let list = document.querySelectorAll(".lb");
  function deleteList() {
    list = document.querySelectorAll(".lb");
    const deleteButton = document.querySelectorAll(".trash");

    function deletePlan(e) {
      e.target.closest(".lb").style.display = "none";
    }

    deleteButton.forEach((btn) => btn.addEventListener("click", deletePlan));
  }
  deleteList();

  let deEl = document.querySelectorAll("dt");
  let ddEl = document.querySelectorAll("dd");
  function editButtonFunc() {
    deEl = document.querySelectorAll("dt");
    ddEl = document.querySelectorAll("dd");
    list = document.querySelectorAll(".lb");
    const editButton = document.querySelectorAll(".edit");

    function editPlan(e) {
      e.target.closest("dt").setAttribute("contenteditable", "true");
      e.target.closest("dd").setAttribute("contenteditable", "true");
    }
    editButton.forEach((btn) => btn.addEventListener("click", editPlan));
    console.log("clicked");
  }
  editButtonFunc();

  function saveButtonFunc() {
    deEl = document.querySelectorAll("dt");
    ddEl = document.querySelectorAll("dd");
    list = document.querySelectorAll(".lb");
    const saveButton = document.querySelectorAll(".save");

    function savePlan(e) {
      e.target.closest("dt").setAttribute("contenteditable", "false");
      e.target.closest("dd").setAttribute("contenteditable", "false");
    }
    saveButton.forEach((btn) => btn.addEventListener("click", savePlan));
  }
  saveButtonFunc();
};

submitButton.addEventListener("click", () => {
  if (statusInput.value === "ToDo") {
    createElementMine("#todo");
  } else if (statusInput.value === "InProgress") {
    createElementMine("#inprogress");
  } else {
    createElementMine("#done");
  }
});
