// Efecto typing para el hero + fade-in del subtítulo
const text = "Diego Alejandro Gomez.";
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


/* Para boton arriba */
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


 /* interruptor */ 
 const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('light-theme');
});
