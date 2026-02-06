const images = document.querySelectorAll("img[data-src]");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const img = entry.target;
      img.src = img.dataset.src;

      img.addEventListener("load", () => {
        img.classList.add("loaded");
      });

      observer.unobserve(img);
    });
  },
  {
    threshold: 0.2
  }
);

images.forEach(img => observer.observe(img));
