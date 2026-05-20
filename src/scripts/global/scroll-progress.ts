// ─── SCROLL PROGRESS ──────────────────────────────────────────────────────
const spb = document.getElementById("spb");
window.addEventListener("scroll", () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      spb!.style.height = `${pct}%`;
});