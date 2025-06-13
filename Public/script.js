// Scroll reveal animation
document.addEventListener("DOMContentLoaded", () => {
  const revealSections = document.querySelectorAll("section");

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        revealObserver.unobserve(entry.target); // Animate once
      }
    });
  }, { threshold: 0.1 });

  revealSections.forEach(section => {
    revealObserver.observe(section);
  });

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('open');
  });
});
