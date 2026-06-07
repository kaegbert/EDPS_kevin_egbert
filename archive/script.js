(function () {
  "use strict";

  /* Set your email for the contact form mailto link */
  const CONTACT_EMAIL = "";

  const navToggle = document.querySelector(".nav-toggle");
  const sidebarNav = document.querySelector(".sidebar-nav");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");
  const revealElements = document.querySelectorAll(".reveal");
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.querySelector(".form-status");

  /* Mobile navigation */
  function closeNav() {
    if (!navToggle || !sidebarNav) return;
    navToggle.setAttribute("aria-expanded", "false");
    sidebarNav.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function openNav() {
    if (!navToggle || !sidebarNav) return;
    navToggle.setAttribute("aria-expanded", "true");
    sidebarNav.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  if (navToggle && sidebarNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = sidebarNav.classList.contains("is-open");
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeNav();
      }
    });
  }

  /* Active nav link based on scroll position */
  function setActiveNav() {
    const scrollPos = window.scrollY + 120;

    let current = "";
    sections.forEach(function (section) {
      if (scrollPos >= section.offsetTop) {
        current = section.getAttribute("id") || "";
      }
    });

    navLinks.forEach(function (link) {
      const href = link.getAttribute("href");
      if (!href || href.charAt(0) !== "#") {
        return;
      }
      const isActive = href === "#" + current;
      link.classList.toggle("is-active", isActive);
    });
  }

  window.addEventListener("scroll", setActiveNav, { passive: true });
  setActiveNav();

  /* Scroll reveal */
  if ("IntersectionObserver" in window && revealElements.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* Contact form — mailto fallback (static site, no backend) */
  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = /** @type {HTMLInputElement} */ (
        document.getElementById("name")
      ).value.trim();
      const email = /** @type {HTMLInputElement} */ (
        document.getElementById("email")
      ).value.trim();
      const message = /** @type {HTMLTextAreaElement} */ (
        document.getElementById("message")
      ).value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = "Please fill in all fields.";
        formStatus.className = "form-status is-visible";
        return;
      }

      const subject = encodeURIComponent("Portfolio contact from " + name);
      const body = encodeURIComponent(
        "Name: " + name + "\nEmail: " + email + "\n\n" + message
      );

      const mailtoBase = CONTACT_EMAIL
        ? "mailto:" + encodeURIComponent(CONTACT_EMAIL) + "?"
        : "mailto:?";
      window.location.href =
        mailtoBase + "subject=" + subject + "&body=" + body;

      formStatus.textContent =
        "Your email client should open shortly. If it does not, reach out on GitHub.";
      formStatus.className = "form-status is-visible is-success";
      contactForm.reset();
    });
  }
})();
