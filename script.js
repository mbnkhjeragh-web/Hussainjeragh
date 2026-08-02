/* THE POLO ROOM — ambient controls */
(function () {
  "use strict";

  var body = document.body;

  function wire(btnId, className, pressedByDefault) {
    var btn = document.getElementById(btnId);
    if (!btn) return;
    var on = pressedByDefault;
    btn.setAttribute("aria-pressed", String(on));

    btn.addEventListener("click", function () {
      on = !on;
      btn.setAttribute("aria-pressed", String(on));
      // className is the "off"/"mode" toggle applied to <body>
      if (btnId === "dayBtn") {
        body.classList.toggle("daylight", on);
      } else {
        // lamps/fire: class present == OFF
        body.classList.toggle(className, !on);
      }
    });
  }

  // Lamps + sconces on by default -> "lamps-off" absent
  wire("lampBtn", "lamps-off", true);
  // Fireplace on by default -> "fire-off" absent
  wire("fireBtn", "fire-off", true);
  // Daylight off by default
  wire("dayBtn", "daylight", false);

  // Subtle parallax: tilt the room toward the cursor
  var room = document.querySelector(".room");
  var stage = document.getElementById("stage");
  if (room && stage && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    stage.addEventListener("mousemove", function (e) {
      var r = stage.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;   // -0.5..0.5
      var y = (e.clientY - r.top) / r.height - 0.5;
      room.style.transform =
        "rotateY(" + (x * 5).toFixed(2) + "deg) rotateX(" + (-y * 3).toFixed(2) + "deg)";
    });
    stage.addEventListener("mouseleave", function () {
      room.style.transform = "";
    });
  }
})();
