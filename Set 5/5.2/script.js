const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const observerCallback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));

      const activeLink = document.querySelector(
        `.nav-link[href="#${entry.target.id}"]`,
      );
      activeLink.classList.add('active');
    }
  });
};

const observer = new IntersectionObserver(observerCallback, {
  root: null,
  threshold: 0.6,
});

sections.forEach(section => observer.observe(section));
