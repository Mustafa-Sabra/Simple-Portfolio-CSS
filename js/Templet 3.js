
var links = document.getElementById("links"),
  button = document.getElementById("button");
function handleLinks() {
  links.classList.toggle("hide");
}
button.addEventListener("click", handleLinks);