const modal = document.getElementById("surpriseModal");
const btn = document.getElementById("surpriseBtn");
const span = document.querySelector(".close");

btn.onclick = function () {
  modal.style.display = "flex";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Texto animado
const text = "Cada momento ao seu lado é especial... Aqui vão algumas lembranças nossas.";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 60);
  }
}

btn.onclick = function () {
  modal.style.display = "flex";
  document.getElementById("typewriter").innerHTML = "";
  index = 0;
  typeWriter();
}

