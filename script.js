function onMenu() {
  const e = document.getElementById("navbar");
  if (e.className === "navbar__links") {
    e.classList.add("activate");
    e.style.display = "block";
  } else {
    e.classList.remove("activate");
    e.style = "none";
  }
}