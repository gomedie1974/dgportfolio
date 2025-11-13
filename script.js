// Efecto typing para el hero + fade-in del subtítulo
const nameText = "Diego Alejandro Gomez.";
const subtitleText = "Desarrollo experiencias web modernas, funcionales y visualmente atractivas.";

const typingSpeed = 150;
const subtitleTypingSpeed = 55; // velocidad más rápida para el subtítulo

const nameSpan = document.querySelector(".hero-content .name");
const subtitle = document.querySelector(".hero-subtitle");
const heroBtn = document.querySelector(".hero-btn");
const logo = document.querySelector(".logo");

// Mostrar logo al iniciar hero
setTimeout(() => {
  logo.classList.add("show");
}, 100); // pequeño retraso para animación

nameSpan.textContent = "";
subtitle.textContent = ""; // limpiar subtítulo antes de empezar

let i = 0;
let j = 0;

function typeWriter() {
  if (i < nameText.length) {
    nameSpan.textContent += nameText.charAt(i);
    i++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    nameSpan.classList.add("cursor-done"); // oculta el cursor
    typeSubtitle(); // iniciar tipeo del subtítulo al terminar el nombre
  }
}

function typeSubtitle() {
  subtitle.classList.add("show"); // hace visible el subtítulo (si tenías un fade-in)
  if (j < subtitleText.length) {
    subtitle.textContent += subtitleText.charAt(j);
    j++;
    setTimeout(typeSubtitle, subtitleTypingSpeed);
  } else {
    heroBtn.classList.add("show");
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

// Botón para subir arriba
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Interruptor de tema
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('light-theme');
});
