document.querySelector("header").style.backgroundColor = "midnightblue";
document.querySelector("header").style.textAlign = "center";
document.querySelector("header").style.padding = "1rem";
document.querySelector("header").style.color = "white";
document.querySelector(".btn").style.backgroundColor = "cadetblue";

// part2
const titleElement = document.getElementById("title");
titleElement.textContent = "Javascript Dom Assignment 1";

// part3
const navItemElement = document.querySelector(".nav-item");
navItemElement.style.display = "flex";
navItemElement.style.justifyContent = "center";
navItemElement.style.gap = "1rem";
navItemElement.style.listStyle = "none";
0

// part4
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

usernameInput.value = "Ahmet";
passwordInput.value = "R2162";
passwordInput.type = "text";

usernameInput.disabled = true;
passwordInput.disabled = true;

// part5
const btnElement = document.querySelector(".btn");
btnElement.style.backgroundColor = "midnightblue";
btnElement.style.color = "white";
btnElement.style.padding = "10px 20px";
btnElement.style.borderRadius = "10px";
btnElement.style.cursor = "pointer";
btnElement.style.border = "none";
btnElement.textContent = "Giriş-Yap";

// part6
const projectsElement = document.getElementById("projects");
projectsElement.querySelector("h3").textContent = "Js Dom Projects";
projectsElement.style.fontFamily = "courier New";

// part7
const myProjects = [
  "Hello World!",
  "Guess Number",
  "Checkout Page",
  "Gelir-Gider Projesi",
  "Api Projects",
];
const projectsList = projectsElement.querySelector("ul");

myProjects.forEach((project) => {
  const li = document.createElement("li");
  li.textContent = project;
  projectsList.appendChild(li);
});
