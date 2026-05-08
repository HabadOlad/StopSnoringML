// ---  NAVIGATION (Exists on all pages via layout.html) ---
// We use .textContent because the <a> tag already exists in your HTML.
// This just fills in the text.
document.getElementById("index")?.insertAdjacentHTML("afterbegin", "Homepage");
document.getElementById("chart")?.insertAdjacentHTML("afterbegin", "Chart");
document.getElementById("tables")?.insertAdjacentHTML("afterbegin", "Tables");
document
  .getElementById("information")
  ?.insertAdjacentHTML("afterbegin", "Information");

// --- 2. INFORMATION PAGE CONTENT (Only exists on certain pages) ---
// The ?. means "if this element exists, set the innerHTML. If not, do nothing (don't crash)."
document
  .getElementById("whyibuiltthis")
  ?.insertAdjacentHTML(
    "beforeend",
    "<p>I built this to help track snoring patterns using ML.</p>",
    "<p>(and obviously to help me stop snoring!).</p>"
  );
document
  .getElementById("howdoesitwork")
  ?.insertAdjacentHTML(
    "beforeend",
    "<p>It uses a machine learning model to analyze audio data.</p>"
  );
document.getElementById("whoistheauthor")?.insertAdjacentHTML(
  "beforeend",
  `<p>Hi! That's me, Habad!</p>
     <img src="/static/css/images/stopsnoreml.jpeg" alt="Habad's Photo" style="width:200px; border-radius:10px;">`
);
