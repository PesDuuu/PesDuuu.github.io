document.addEventListener('DOMContentLoaded', () => {
  // Get all nav links
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Add click event listener to each nav link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      // Collapse the navbar
      const navbarToggler = document.querySelector('.navbar-toggler');
      if (navbarToggler) {
        const collapse = document.querySelector('#ftco-nav');
        if (collapse.classList.contains('show')) {
          navbarToggler.click(); // Simulate a click to toggle the collapse
        }
      }
    });
  });
});
