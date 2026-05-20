/* ═══════════════════════════════ DARK MODE BY SECTION + SECTION TRACKER ═══════════════════════════════ */
const sidebarLinks: Element[] = [];
Array.from(document.getElementById("sidebar-navigation")!.children || []).forEach((element) => {
      sidebarLinks.push(element);
});
const warmSections = ["truth", "shift"];
const allSections = ["hero", "truth", "mirror", "numbers", "quiz", "lifecycle", "shift", "pledge"];
let previousSectionIndex = -1;
const sectionObserver = new IntersectionObserver(
      (entries) => {
            entries.forEach((e) => {
                  const id = e.target.id;
                  if (e.isIntersecting) {
                        document.body.classList.toggle("dark-mode", !warmSections.includes(id));

                        const currentSectionIndex = allSections.indexOf(id) - 1;
                        if (currentSectionIndex < previousSectionIndex) {
                              sidebarLinks[previousSectionIndex]!.classList.toggle("active", false);
                        }
                        if (currentSectionIndex > previousSectionIndex) {
                              sidebarLinks[currentSectionIndex]!.classList.toggle("active", true);
                        }
                        previousSectionIndex = currentSectionIndex;
                  }
            });
      },
      { threshold: 0, scrollMargin: "-50%" },
);
allSections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
});