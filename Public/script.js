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

// Fetch and display last update date
fetch('https://api.github.com/repos/RealRatnadwip/RealRatnadwip.github.io/commits?./Public/contact.html')
  .then(response => response.json())
  .then(data => {
    const date = new Date(data[0].commit.committer.date);

    // Format date
    const day = date.getDate().toString().padStart(2, '0');
    const monthName = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    // Format time
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    // Get user's local time zone
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const formatted = `Last updated: ${day} ${monthName} ${year} at ${hours}:${minutes}:${seconds} (${timeZone})`;

    const lastUpdatedElement = document.getElementById("last-updated");
    if (lastUpdatedElement) {
      lastUpdatedElement.textContent = formatted;
    }
  })
  .catch(error => {
    const lastUpdatedElement = document.getElementById("last-updated");
    if (lastUpdatedElement) {
      lastUpdatedElement.textContent = "Last updated: unavailable";
    }
  });


function updateClock() {
  const now = new Date();

  const dayName = now.toLocaleDateString("en-US", { weekday: "long" });
  const monthName = now.toLocaleDateString("en-US", { month: "long" });
  const day = now.getDate();
  const year = now.getFullYear();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // Get local timezone abbreviation
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const clockText = `Current Time - ${dayName}, ${monthName} ${day}, ${year} ${hours}:${minutes}:${seconds} (${timeZone})`;

  document.getElementById("liveClock").textContent = clockText;
}

setInterval(updateClock, 1000);
updateClock();

