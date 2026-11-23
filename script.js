// PERSONALISASI WEBSITE DI BAGIAN INI
const CONFIG = {
  nickname: "My Sweetheart",   // ganti dengan panggilan sayang
  password: "160826"           // ganti kata kunci pembuka
};

document.getElementById("heroName").textContent = CONFIG.nickname;

const screens = [...document.querySelectorAll(".screen")];
function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle("active", screen.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => showScreen(button.dataset.go));
});
document.querySelectorAll("[data-home]").forEach(button => {
  button.addEventListener("click", event => { event.preventDefault(); showScreen("home"); });
});
document.querySelectorAll("[data-page]").forEach(button => {
  button.addEventListener("click", () => showScreen(button.dataset.page));
});

document.getElementById("passwordForm").addEventListener("submit", event => {
  event.preventDefault();
  const value = document.getElementById("passwordInput").value.trim().toLowerCase();
  const error = document.getElementById("passwordError");
  if (value === CONFIG.password.toLowerCase()) {
    error.textContent = "";
    document.getElementById("passwordInput").value = "";
    showScreen("menu");
  } else {
    error.textContent = "Sayang?? kamu lupain tanggal jadian kita ya? 😢";
  }
});

document.getElementById("wishButton").addEventListener("click", () => {
  document.getElementById("wishResult").textContent =
    "Semoga harapan yang kamu inginkan akan segera terwujud yaa sayang. You deserve beautiful things. ♡";
});

// Musik latar mencoba autoplay ketika website dibuka.
// Jika browser memblokir autoplay bersuara, tekan tombol ♫ di header.
const birthdayMusic = document.getElementById("birthdayMusic");
const soundToggle = document.getElementById("soundToggle");
function updateMusicButton() {
  soundToggle.textContent = birthdayMusic.paused ? "♪" : "♫";
  soundToggle.classList.toggle("is-on", !birthdayMusic.paused);
}
birthdayMusic.volume = 0.35;
birthdayMusic.play().then(updateMusicButton).catch(() => {
  soundToggle.textContent = "♪";
  soundToggle.title = "Klik untuk memutar musik";
});
soundToggle.addEventListener("click", async () => {
  if (birthdayMusic.paused) {
    try { await birthdayMusic.play(); } catch (error) { soundToggle.title = "Browser belum mengizinkan pemutaran musik"; }
  } else { birthdayMusic.pause(); }
  updateMusicButton();
});
