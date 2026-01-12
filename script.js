const form = document.getElementById("accessForm");
const waBtn = document.getElementById("waBtn");
const lockText = document.getElementById("lockText");

// LINK GRUP WA (ISI LINK ASLI)
const WA_LINK = "https://chat.whatsapp.com/LP27HdRdbL61g41bwS5aGX";

// cek status
if (localStorage.getItem("ravenze_unlocked") === "true") {
  unlockWA();
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  localStorage.setItem("ravenze_unlocked", "true");
  unlockWA();
});

function unlockWA() {
  waBtn.disabled = false;
  waBtn.classList.remove("locked");
  waBtn.classList.add("unlocked");
  waBtn.innerText = "Masuk Grup WhatsApp";
  lockText.innerText = "Akses telah dibuka";
  waBtn.onclick = () => window.open(WA_LINK, "_blank");
}
