
//header cambiar de imagen
window.addEventListener('load', function() {
  //console.log('El contenido ha cargado');

  var imagenes = [
    
    "url('imagenes/PlazaRaviggnianiComuna11(2).jpg')",
    "url('imagenes/TheCleanGardenimg2.jpg')",
    "url('imagenes/sillas-y-mesas.jpg')"
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
})
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



//PARA CURSOR DEL TECLADO EN GALERIA DE FOTOS Y QUE SE CAMBIEN

/*document.addEventListener("DOMContentLoaded", function () {
  const galleries = document.querySelectorAll(".gallery__container__img");

  galleries.forEach((gallery) => {
    const galleryImages = gallery.querySelectorAll(".gallery__image__img");

    galleryImages.forEach((imageContainer, index) => {
      const originalImage = imageContainer.querySelector("img");
      const hoverImage = document.querySelector(`.hover-image[data-index="${index}"]`);

      imageContainer.addEventListener("mouseenter", () => {
        originalImage.style.display = "none";
        hoverImage.style.display = "block";
      });

      imageContainer.addEventListener("mouseleave", () => {
        originalImage.style.display = "block";
        hoverImage.style.display = "none";
      });
    });
  });
});*/


