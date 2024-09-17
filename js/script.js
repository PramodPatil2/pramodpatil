// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show the button when scrolled down 100px
  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollToTopBtn.classList.add("show-scroll-btn");
    } else {
      scrollToTopBtn.classList.remove("show-scroll-btn");
    }
  };

  // Scroll to the top when the button is clicked
  scrollToTopBtn.onclick = function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Initialize AOS (Animate On Scroll) for animations
  AOS.init();
  