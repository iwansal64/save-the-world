
/* ═══════════════════════════════════════════
   3D CARD TILT
═══════════════════════════════════════════ */
const isTouch = window.matchMedia('(pointer: coarse)').matches; // If it's using touch device
function addTilt(selector: string, strength = 7) {
      if (isTouch) return;
      document.querySelectorAll(selector).forEach(card => {
            let frame: number;
            card.addEventListener('mousemove', e => {
                  cancelAnimationFrame(frame);
                  frame = requestAnimationFrame(() => {
                        const r = card.getBoundingClientRect();
                        const x = (((e as MouseEvent).clientX - r.left) / r.width - 0.5) * 2;
                        const y = (((e as MouseEvent).clientY - r.top) / r.height - 0.5) * 2;
                        (card as HTMLElement).style.transition = 'none';
                        (card as HTMLElement).style.transform = `perspective(900px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) scale(1.02)`;
                  });
            });
            card.addEventListener('mouseleave', () => {
                  cancelAnimationFrame(frame);
                  (card as HTMLElement).style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s';
                  (card as HTMLElement).style.transform = '';
            });
      });
}
// Apply 3D tilt to all card types
addTilt('.pillar-card', 5);
addTilt('.stat-card-dark', 4);
addTilt('.principle', 3);
// City cards: tilt only (no scale, they're fixed width in carousel)
addTilt('.city-card', 4);