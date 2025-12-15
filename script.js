// Scroll reveal
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

reveals.forEach(el => observer.observe(el));

// Scroll progress bar
window.addEventListener("scroll", () => {
  const progress =
    (window.scrollY /
      (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById("scroll-progress").style.width = progress + "%";
});
