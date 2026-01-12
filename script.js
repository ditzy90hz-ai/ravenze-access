const form = document.getElementById("accessForm");
const waBtn = document.getElementById("waBtn");
const lockText = document.getElementById("lockText");
const WA_LINK = "https://chat.whatsapp.com/LP27HdRdbL61g41bwS5aGX";

// cek status unlock di localStorage
if (localStorage.getItem("ravenze_unlocked") === "true") unlockWA();

// pakai event submit
form.addEventListener("submit", () => {
  // delay 2 detik supaya data bisa terkirim dulu ke Google
  setTimeout(() => {
    localStorage.setItem("ravenze_unlocked", "true");
    unlockWA();
  }, 2000); // 2 detik delay
});

function unlockWA() {
  waBtn.disabled = false;
  waBtn.classList.remove("locked");
  waBtn.classList.add("unlocked");
  waBtn.innerText = "Masuk Grup WhatsApp";
  lockText.innerText = "Akses telah dibuka";
  waBtn.onclick = () => window.open(WA_LINK, "_blank");
}
