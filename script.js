// Contador regressivo
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

// Controle da música
const music = document.getElementById("bg-music");
function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
