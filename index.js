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
