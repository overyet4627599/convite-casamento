// =======================
// Contador regressivo
// =======================
const weddingDate = new Date("Sep 11, 2026 18:00:00").getTime();
const countdownElement = document.getElementById("countdown");

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    clearInterval(timer);
    countdownElement.innerHTML = "🎉 O grande dia chegou!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `⏳ Faltam 
    <span>${days}</span> dias, 
    <span>${hours}</span>h 
    <span>${minutes}</span>m 
    <span>${seconds}</span>s`;
}, 1000);

// =======================
// Controle da música
// =======================
const music = document.getElementById("bg-music");
function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// =======================
// Carrossel de fotos
// =======================
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-container img");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Troca automática a cada 5 segundos
setInterval(nextSlide, 5000);

// Inicializa carrossel
showSlide(currentSlide);
