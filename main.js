const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
//header cambiar de imagen
window.addEventListener('load', function() {
  console.log('El contenido ha cargado');

  var imagenes = [
    "url('./assets/jardinero-weedwacker-cortando-cesped-jardin.jpg')",
    "url('./assets/life-mexico-landscape-with-trees.jpg')",
    "url('./assets/podaDeArboles.jpg')"
  ];

  var indiceImagenes = 0;
  var header = document.querySelector('.header');

  function cargarSiguienteImagen() {
    indiceImagenes = (indiceImagenes + 1) % imagenes.length;
    header.style.backgroundImage = imagenes[indiceImagenes];
  }

  function cambiarImagenes() {
    cargarSiguienteImagen();
  }

  // Initial call to set the first image
  cargarSiguienteImagen();

  setInterval(cambiarImagenes, 3000);
});
// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOptions,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOptions,
  delay: 500,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOptions,
  interval: 500,
});

// price container
ScrollReveal().reveal(".price__card", {
  ...scrollRevealOptions,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

