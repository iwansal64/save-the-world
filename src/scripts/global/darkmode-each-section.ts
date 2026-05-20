import { setCurrentSectionIndex } from "./sidebar-navigation";

/* ═══════════════════════════════ DARK MODE BY SECTION + SECTION TRACKER ═══════════════════════════════ */
const warmSections = ["truth", "shift"];
const allSections = ["hero", "truth", "mirror", "quiz", "numbers", "problem", "lifecycle", "shift", "pledge"];
const sectionObserver = new IntersectionObserver(
      (entries) => {
            entries.forEach((e) => {
                  const id = e.target.id;
                  if (e.isIntersecting) {
                        document.body.classList.toggle("dark-mode", !warmSections.includes(id));

                        const currentSectionIndex = allSections.indexOf(id) - 1;
                        setCurrentSectionIndex(currentSectionIndex);
                  }
            });
      },
      { threshold: 0, scrollMargin: "-50%" },
);
allSections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
});