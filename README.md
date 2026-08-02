# The Polo Room 🐎

An immersive, hand-built web scene inspired by the world of **Polo Ralph Lauren** —
preppy Americana rendered entirely in HTML & CSS. Navy oxford-stripe walls with wood
wainscoting, a crackling fireplace under an equestrian portrait, a tufted burgundy
leather club chair, a saddle-leather bookcase, a brass reading lamp, a steamer-trunk
ottoman, and a moonlit garden view through mullioned windows.

## Run it

Just open `index.html` in any modern browser — no build step, no dependencies.

```bash
# optional: serve locally
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Features

- **Pure-CSS scene** — every object (chair, fireplace, bookcase, lamp, trunk, portrait)
  is drawn with gradients, `clip-path`, and box-shadows. No images.
- **Ambient controls** (top-right):
  - **Lamps** — toggle the warm brass-lamp glow.
  - **Fireplace** — animated flames and ember glow on/off.
  - **Daylight** — switch between a cozy evening and a bright afternoon.
  - **Rain** — a soft shower against the window.
- **Cursor parallax** — the room tilts gently toward your pointer.
- **Floating dust motes** drifting in the firelight.
- **Responsive** and respects `prefers-reduced-motion`.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Scene markup |
| `styles.css` | All styling, layout, and animation |
| `script.js`  | Controls, parallax, and particles |

---

_A fan-made tribute. Not affiliated with or endorsed by Ralph Lauren Corporation._
