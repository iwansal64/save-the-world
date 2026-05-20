// ── Cart Animation Mechanism ─────────────────────────────────────────────────
let count = 0;
const badge = document.getElementById("badge");

// ── Core update function ─────────────────────────────────────────────────
function setCount(n: number) {
      count = n;
      const isOverflow = count > 99;

      // Label
      badge!.textContent = isOverflow ? "99+" : String(count);

      // Classes
      badge!.classList.toggle("overflow", isOverflow);

      // Bump animation (only when NOT in overflow spin)
      if (!isOverflow) {
            badge!.classList.remove("bump");
            // Force reflow so animation re-triggers
            void badge!.offsetWidth;
            badge!.classList.add("bump");
      }
}

function startsCounting() {
      if (count >= 100) return;

      setTimeout(
            () => {
                  setCount(count + 1);
                  startsCounting();
            },
            (100 - count) * 5,
      );
}


// ─── HERO GLITCH SEQUENCE ─────────────────────────────────────────────────
// Phase 1: "the best." shown (via CSS animation)
// Phase 2: at ~3s, glitch and flip to "the truth."
// Phase 3: sub text fades in

const heroSection = document.getElementById("hero");
setTimeout(() => {
      const wrap = document.getElementById("phrase-wrap");
      const fx = document.getElementById("glitch-fx");
      const hero = document.getElementById("hero");

      // Start glitch flicker
      wrap!.classList.add("glitching");
      fx!.style.opacity = "1";

      let glitchCount = 0;
      const glitchInterval = setInterval(() => {
            glitchCount++;
            wrap!.style.transform = `translateX(${(Math.random() - 0.5) * 8}px)`;
            // Brief amber flash on the whole hero bg
            hero!.style.backgroundColor = glitchCount % 2 === 0 ? "rgba(255,140,0,0.04)" : "";
            setTimeout(() => {
                  wrap!.style.transform = "";
            }, 70);

            if (glitchCount >= 6) {
                  clearInterval(glitchInterval);
                  hero!.style.backgroundColor = "";

                  // Flip "the best." → "the truth."
                  wrap!.classList.add("glitched");
                  wrap!.classList.remove("glitching");
                  fx!.style.opacity = "0";

                  // ── DARK THEME TRANSITION ──────────────────────────────────────
                  hero!.classList.add("hero-dark");
                  Array.from(document.getElementsByClassName("active-after-opening")).forEach((element) => {
                        element.classList.add("active");
                  });
                  document.body.classList.add("dark-mode", "hero-revealed");

                  // Reveal sub-text, cart, scroll cue after dark settles
                  setTimeout(() => {
                        const cartWrap = document.getElementById("cart-wrap") as HTMLElement;
                        cartWrap.classList.add("cart-wrap-visible");
                  }, 400);
                  setTimeout(() => {
                        const heroScroll = document.querySelector(".hero-scroll") as HTMLElement;
                        heroScroll.classList.add("hero-scroll-visible");
                  }, 700);

                  // Cart animation starts
                  startsCounting();
            }
      }, /**90 */ 0);
}, /** 2000 */ 0);