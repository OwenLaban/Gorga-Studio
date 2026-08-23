// ===== Tahun otomatis di footer =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Tombol tema mengambang: Terang / Gelap =====
const themeFab = document.getElementById("themeFab");
if (themeFab) {
  const STORAGE_KEY = "gorga-theme";

  const getStored = () => {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  };
  const setStored = (v) => {
    try { localStorage.setItem(STORAGE_KEY, v); } catch (e) {}
  };

  function applyTheme(theme) {
    const isLight = theme !== "dark";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    // ikon menunjukkan tema yang akan dipilih
    themeFab.textContent = isLight ? "🌙" : "☀️";
    themeFab.title = isLight ? "Mode gelap" : "Mode terang";
    themeFab.setAttribute("aria-label", isLight ? "Mode gelap" : "Mode terang");
  }

  // terapkan tema tersimpan saat load (default: terang)
  applyTheme(getStored() || "light");

  themeFab.addEventListener("click", () => {
    const nowDark = document.documentElement.getAttribute("data-theme") === "dark";
    const next = nowDark ? "light" : "dark";
    applyTheme(next);
    setStored(next);
  });
}


// ===== Toggle menu mobile =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// ===== Animasi muncul saat scroll =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".card, .plan, .section__head").forEach((el, i) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(24px)";
  el.style.transition = "opacity .6s ease, transform .6s ease";
  el.style.transitionDelay = (i % 3) * 0.08 + "s";
  observer.observe(el);
});

// ===== Form: kirim ke WhatsApp =====
// Ganti dengan nomor WhatsApp bisnis Anda (format 62xxxxxxxxxx, tanpa +)
const WA_NUMBER = "6281234567890";

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const nama = form.nama.value.trim();
  const wa = form.wa.value.trim();
  const paket = form.paket.value;
  const pesan = form.pesan.value.trim();

  if (!nama || !wa || !paket) return false;

  const text =
    `Halo WebSaya 👋\n\n` +
    `Nama: ${nama}\n` +
    `WhatsApp: ${wa}\n` +
    `Paket: ${paket}\n` +
    `Pesan: ${pesan || "-"}`;

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");

  document.getElementById("formStatus").textContent =
    "✅ Mengalihkan ke WhatsApp Anda...";
  form.reset();
  return false;
}
