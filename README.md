# The Polo Room

An immersive, hand-built web scene inspired by the world of **Polo Ralph Lauren** —
preppy Americana rendered entirely in HTML & CSS: navy walls with oxford stripes,
a crackling fireplace, a tufted burgundy leather club chair, saddle-leather bookcases,
equestrian art, a brass reading lamp, and a garden view through mullioned windows.

## Run it

Just open `index.html` in any modern browser — no build step, no dependencies.

```bash
# optional: serve locally
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Features

- **Pure CSS scene** — every piece of furniture is drawn with gradients, clip-paths, and box-shadows.
- **Live controls** (top right):
  - **Lamps** — toggle the warm lamp & sconce glow.
  - **Fireplace** — animated flames on/off.
  - **Daylight** — switch between cozy evening and bright afternoon.
- **Cursor parallax** — the room tilts gently toward your pointer.
- **Responsive** and respects `prefers-reduced-motion`.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Scene markup |
| `styles.css` | All styling, layout, and animation |
| `script.js`  | Ambient controls & parallax |

---

_A fan-made tribute. Not affiliated with or endorsed by Ralph Lauren Corporation._
