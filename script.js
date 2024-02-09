const tekstElementen = document.querySelectorAll(".lab", ".tekst");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  const drempelwaarde = 100; // Pas deze waarde aan

  for (const element of tekstElementen) {
    if (scrollPos >= element.offsetTop - drempelwaarde) {
      element.classList.add("fade-in");
    }
  }
});