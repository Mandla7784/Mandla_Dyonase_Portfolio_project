const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll('.nav__link');
//attaching nan event listener on the togggler.
navToggle.addEventListener('click',() =>{
    document.body.classList.toggle('nav-open');
})
//looping through node of links..
navLinks.forEach(link =>{
    link.addEventListener('click',() =>{
      document.body.classList.remove('nav-open');
    })
})
