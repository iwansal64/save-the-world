/* ═══════════════════════════════ STAT COUNTERS ═══════════════════════════════ */
function animCount(element: HTMLElement) {
      const target = parseFloat(element.dataset.target || "0");
      const prefix = element.dataset.prefix || "";
      const suffix = element.dataset.suffix || "";
      const dur = 2000;
      const start = performance.now();
      function tick(now: DOMHighResTimeStamp) {
            const p = Math.min((now - start) / dur, 1);
            const e = 1 - Math.pow(1 - p, 3);
            const v = e * target;
            element.textContent = prefix + (target >= 1000 ? Math.round(v).toLocaleString() : target < 5 ? v.toFixed(0) : Math.round(v)) + suffix;
            if (p < 1) requestAnimationFrame(tick);
            else element.textContent = prefix + (target >= 1000 ? target.toLocaleString() : target) + suffix;
      }
      requestAnimationFrame(tick);
}
const cob = new IntersectionObserver(
      (entries) => {
            entries.forEach((e) => {
                  if (!e.isIntersecting) return;
                  e.target.classList.add("vis");
                  const numEl = e.target.querySelector("[data-target]");
                  if (numEl && !(numEl as HTMLElement).dataset.counted) {
                        animCount(numEl as HTMLElement);
                        (numEl as HTMLElement).dataset.counted = "1";
                  }
                  cob.unobserve(e.target);
            });
      },
      { threshold: 0.2 },
);
document.querySelectorAll(".stat-card-dark,.pillar-stat,.ticker-item").forEach((el) => cob.observe(el));