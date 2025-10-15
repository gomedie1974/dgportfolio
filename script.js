// Efecto typing para el hero + fade-in del subtítulo
const text = "Diego Gomez.";
const typingSpeed = 150;
const nameSpan = document.querySelector(".hero-content .name");
const subtitle = document.querySelector(".hero-subtitle");
const heroBtn = document.querySelector(".hero-btn");
const logo = document.querySelector(".logo");

// Mostrar logo al iniciar hero
setTimeout(() => {
  logo.classList.add("show");
}, 100); // pequeño retraso para animación

nameSpan.textContent = "";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    nameSpan.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    subtitle.classList.add("show");
    heroBtn.classList.add("show");
    nameSpan.classList.add("cursor-done"); // oculta el cursor
  }
}

typeWriter();






// Animaciones de entrada de secciones
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  const options = { threshold: 0.1 };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        obs.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(sec => {
    sec.classList.add('before-reveal');
    observer.observe(sec);
  });
});

// Menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
