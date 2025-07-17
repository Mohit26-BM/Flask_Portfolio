// Theme Toggle
function toggleTheme() {
  const html = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle i");

  if (html.getAttribute("data-theme") === "dark") {
    html.removeAttribute("data-theme");
    themeToggle.classList.remove("fa-sun");
    themeToggle.classList.add("fa-moon");
  } else {
    html.setAttribute("data-theme", "dark");
    themeToggle.classList.remove("fa-moon");
    themeToggle.classList.add("fa-sun");
  }
}

// Scroll Animation
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const words = ["Data Science", "Web Development", "Machine Learning"];
let wordIndex = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function typeWord() {
  if (charIndex < words[wordIndex].length) {
    typingText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWord, 100);
  } else {
    setTimeout(eraseWord, 2000);
  }
}

function eraseWord() {
  if (charIndex > 0) {
    typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseWord, 50);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeWord, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeWord);

document.addEventListener("DOMContentLoaded", typeText);
