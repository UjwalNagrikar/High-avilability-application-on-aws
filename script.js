// wrap logic after DOM ready
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuBtn = document.getElementById('close-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });
  }

  if (closeMenuBtn && mobileMenu) {
    closeMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      // allow links that are only "#"
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Close mobile menu if open
        if (mobileMenu) mobileMenu.classList.add('hidden');
      }
    });
  });

  // Form submission handling (contact form)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // client-side validation could be added here
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
  }

  // Property card hover effect enhancement (adds a stronger shadow on hover)
  const propertyCards = document.querySelectorAll('.property-card');
  propertyCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
    });
  });

  // View Details button click (shows title)
  document.querySelectorAll('.property-card button').forEach(button => {
    button.addEventListener('click', function() {
      // traverse up to property container safely
      const card = this.closest('.property-card');
      if (!card) return;
      const propertyTitle = card.querySelector('h3') ? card.querySelector('h3').textContent : 'Property';
      alert(`You clicked on: ${propertyTitle}\nThis would show detailed property information.`);
    });
  });

});
