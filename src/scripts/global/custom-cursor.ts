// ─── CURSOR ────────────────────────────────────────────────────────────────
const cur = document.getElementById("cur");
const curRing = document.getElementById("cur-ring");
let mx = 0,
      my = 0,
      rx = window.innerWidth / 2,
      ry = window.innerHeight / 2;

document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
      cur!.style.left = `${mx}px`;
      cur!.style.top = `${my}px`;
});
(function animRing() {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      curRing!.style.left = `${rx}px`;
      curRing!.style.top = `${ry}px`;
      requestAnimationFrame(animRing);
})();

document.querySelectorAll("button, a, .pillar-card, .recog-pill").forEach((el) => {
      el.addEventListener("mouseenter", () => {
            curRing!.style.width = "56px";
            curRing!.style.height = "56px";
            cur!.style.transform = "translate(-50%,-50%) scale(1.6)";
      });
      el.addEventListener("mouseleave", () => {
            curRing!.style.width = "34px";
            curRing!.style.height = "34px";
            cur!.style.transform = "translate(-50%,-50%) scale(1)";
      });
});