import { createIcons } from "lucide";

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    console.log("Rishu website loaded");

    createIcons();

    const navLinks = document.querySelectorAll(".nav-link");

    const sections = ["home", "blogs", "lessons", "vocab", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const setActiveLink = (id) => {
      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${id}`
        );
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.45,
        rootMargin: "-10% 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");
      });
    });

    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const x = e.offsetX;
        const y = e.offsetY;

        card.style.background = `
          radial-gradient(
            circle at ${x}px ${y}px,
            rgba(255,255,255,0.92),
            rgba(255,255,255,0.58)
          )
        `;
      });

      card.addEventListener("mouseleave", () => {
        card.style.background = "rgba(255,255,255,0.58)";
      });
    });
  });
}
