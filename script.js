const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelector(".logo img").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

reveals.forEach(section => {
  observer.observe(section);
});

