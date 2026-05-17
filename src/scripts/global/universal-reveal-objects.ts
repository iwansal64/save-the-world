/* ═══════════════════════════════ UNIVERSAL REVEAL OBSERVER ═══════════════════════════════ */
const observer = new IntersectionObserver(
      (entries) => {
            entries.forEach((event) => {
                  const element = event.target;
                  if (element.classList.contains("observe-once")) {
                        if (event.isIntersecting && !element.classList.contains("active"))
                              element.classList.add("active");

                        return;
                  }
                  else if (element.classList.contains("observe")) {
                        element.classList.toggle("active", event.isIntersecting);
                  }
                  else if (event.isIntersecting) {
                        // stagger siblings
                        const siblings = [...element.parentElement!.children].filter(
                              (c) => c.classList.contains("reveal") || c.classList.contains("reveal-left") || c.classList.contains("reveal-right"),
                        );
                        const index = siblings.indexOf(element);
                        setTimeout(() => element.classList.add("vis"), index * 80);
                        observer.unobserve(element);
                  }
            });
      },
      { threshold: 0.15 },
);
document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.observe").forEach((element) => observer.observe(element));