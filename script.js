/* The Polo Room — ambient controls, parallax & particles */
(function () {
  "use strict";

  const room   = document.getElementById("room");
  const stage  = document.getElementById("stage");
  const motes  = document.getElementById("motes");
  const rain   = document.getElementById("rain");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Toggle buttons ---------- */
  const actions = {
    lamps: (on) => room.classList.toggle("no-lamps", !on),
    fire:  (on) => room.classList.toggle("no-fire",  !on),
    day:   (on) => room.classList.toggle("daylight", on),
    rain:  (on) => { rain.classList.toggle("on", on); buildRain(on); },
  };

  document.querySelectorAll(".ctrl").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.toggle;
      const on  = btn.getAttribute("aria-pressed") !== "true";
      btn.setAttribute("aria-pressed", String(on));
      (actions[key] || function () {})(on);
    });
  });

  /* ---------- Cursor parallax (gentle room tilt) ---------- */
  if (!reduce) {
    let raf = null;
    window.addEventListener("pointermove", (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const cx = e.clientX / window.innerWidth  - 0.5;
        const cy = e.clientY / window.innerHeight - 0.5;
        room.style.transform =
          `rotateX(${1.2 - cy * 2.2}deg) rotateY(${cx * 3.2}deg)`;
        raf = null;
      });
    });
    window.addEventListener("pointerleave", () => {
      room.style.transform = "rotateX(1.2deg) rotateY(0deg)";
    });
  }

  /* ---------- Floating warm dust motes ---------- */
  function buildMotes() {
    if (reduce) return;
    const n = 26;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < n; i++) {
      const m = document.createElement("span");
      m.className = "mote";
      const size = 2 + Math.random() * 4;
      m.style.left = Math.random() * 100 + "%";
      m.style.top  = 40 + Math.random() * 55 + "%";
      m.style.width = m.style.height = size + "px";
      m.style.animationDuration = 8 + Math.random() * 10 + "s";
      m.style.animationDelay = -Math.random() * 12 + "s";
      m.style.opacity = 0.3 + Math.random() * 0.5;
      frag.appendChild(m);
    }
    motes.appendChild(frag);
  }

  /* ---------- Rain (built on demand) ---------- */
  let rainBuilt = false;
  function buildRain(on) {
    if (reduce || !on || rainBuilt) return;
    rainBuilt = true;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 90; i++) {
      const d = document.createElement("span");
      d.className = "raindrop";
      d.style.left = Math.random() * 100 + "%";
      d.style.animationDuration = 0.5 + Math.random() * 0.6 + "s";
      d.style.animationDelay = -Math.random() * 2 + "s";
      d.style.opacity = 0.3 + Math.random() * 0.5;
      frag.appendChild(d);
    }
    rain.appendChild(frag);
  }

  buildMotes();
})();
