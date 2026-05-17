/* ═══════════════════════════════ ARCHETYPES ROTATION ═══════════════════════════════ */
const ats = document.querySelectorAll(".archetype-text");
let atI = 0;
ats[0].classList.add("active");
setInterval(() => {
      ats[atI].classList.remove("active");
      atI = (atI + 1) % ats.length;
      ats[atI].classList.add("active");
}, 2000);