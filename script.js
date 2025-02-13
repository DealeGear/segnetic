document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = navMenu.querySelectorAll("a");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Fecha o menu ao clicar em qualquer subitem
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("show")) {
        navMenu.classList.remove("show");
      }
    });
  });
});
