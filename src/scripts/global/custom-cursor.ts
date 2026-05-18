// ─── CURSOR ────────────────────────────────────────────────────────────────
const cur = document.getElementById("cur");
let mx = 0,
      my = 0;

document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
      cur!.style.left = `${mx}px`;
      cur!.style.top = `${my}px`;
});


export function attachHover(sel: string) {
      document.querySelectorAll(sel).forEach((el) => {
            el.addEventListener("mouseenter", () => {
                  cur!.style.transform = "translate(-50%,-50%) scale(2.5)";
                  cur!.style.color = "#ffffff";
                  cur!.style.mixBlendMode = "difference";
            });
            el.addEventListener("mouseleave", () => {
                  cur!.style.transform = "translate(-50%,-50%) scale(1)";
                  cur!.style.color = "unset";
                  cur!.style.mixBlendMode = "unset";
            });
      });
}
attachHover("button,a,li:has(a),.pillar-card,.recog-pill,.quiz-opt,.prod-btn,.pledge-opt,.city-card,.principle");
