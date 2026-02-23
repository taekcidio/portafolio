document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const burgerBtn = document.querySelector(".burger-btn");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (burgerBtn && navMenu) {
    burgerBtn.addEventListener("click", () => {
      const isExpanded = burgerBtn.getAttribute("aria-expanded") === "true";
      burgerBtn.setAttribute("aria-expanded", !isExpanded);
      burgerBtn.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when a link is clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        burgerBtn.classList.remove("active");
        navMenu.classList.remove("active");
        burgerBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active Link Highlighting based on scroll
  // For index.html that has multiple sections
  const sections = document.querySelectorAll("section[id]");

  if (sections.length > 0) {
    window.addEventListener("scroll", () => {
      let current = "";
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100; // Offset for header

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        // Check if href ends with #current
        if (link.getAttribute("href").includes(`#${current}`)) {
          link.classList.add("active");
        }
      });
    });
  }
});
