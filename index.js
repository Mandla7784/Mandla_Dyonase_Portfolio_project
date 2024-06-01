const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
//attaching nan event listener on the togggler.
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});
//looping through node of links..
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

///////////////////////PLANETS////////////////////////
document.addEventListener("mousemove", function (e) {
  const hoverCircle = document.getElementById("hoverCircle");
  hoverCircle.style.left = e.pageX + "px";
  hoverCircle.style.top = e.pageY + "px";

  const followerPlanets = document.getElementById("followerPlanets");
  const numFollowers = 8;

  // Clear previous follower planets
  followerPlanets.innerHTML = "";

  // Create follower planets
  for (let i = 0; i < numFollowers; i++) {
    const follower = document.createElement("div");
    follower.classList.add("follower-circle");
    follower.style.left = Math.random() * window.innerWidth + "px";
    follower.style.top = Math.random() * window.innerHeight + "px";
    followerPlanets.appendChild(follower);
  }

  // Add Earth
  const earth = document.getElementById("earth");
  earth.style.left = e.pageX - 30 + "px"; // Offset to center Earth
  earth.style.top = e.pageY - 30 + "px"; // Offset to center Earth

  // Add Mars
  const mars = document.getElementById("mars");
  mars.style.left = e.pageX + 30 + "px"; // Offset to center Mars
  mars.style.top = e.pageY - 30 + "px"; // Offset to center Mars
});
