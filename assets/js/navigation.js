// Navigation functionality
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');
  
  // Update active link based on scroll position
  function updateActiveLink() {
      const currentPos = window.scrollY;
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          const sectionBottom = sectionTop + section.offsetHeight;
          const sectionId = section.getAttribute('id');
          
          if (currentPos >= sectionTop && currentPos < sectionBottom) {
              navLinks.forEach(link => {
                  link.classList.remove('active');
                  if (link.getAttribute('href') === `#${sectionId}`) {
                      link.classList.add('active');
                  }
              });
          }
      });
  }

  // Add click animation
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          
          if (targetSection) {
              targetSection.scrollIntoView({
                  behavior: 'smooth'
              });
              
              // Close mobile menu if open
              const navLinks = document.querySelector('.nav-links');
              navLinks.classList.remove('active');
          }
      });
  });

  // Update active link on scroll
  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink(); // Initial check
}