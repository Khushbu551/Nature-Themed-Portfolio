const text = " Natur's Canvas";

let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("portfolio-title").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 150);
  }
}
window.onload = typeEffect;
