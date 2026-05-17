/* pillar cards */
const pob = new IntersectionObserver(
      (entries) => {
            entries.forEach((e) => {
                  if (!e.isIntersecting) return;
                  const idx = ["pc-0", "pc-1", "pc-2"].indexOf(e.target.id);
                  setTimeout(() => e.target.classList.add("vis"), idx * 130);
                  pob.unobserve(e.target);
            });
      },
      { threshold: 0.15 },
);
["pc-0", "pc-1", "pc-2"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) pob.observe(el);
});