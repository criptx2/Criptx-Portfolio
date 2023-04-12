// Toggle mobile menu
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll to section
const navLinksList = document.querySelectorAll('.nav-links li a');

navLinksList.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute('href');
    document.querySelector(sectionId).scrollIntoView({behavior: 'smooth'});
  });
});

// Image modal
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-content');
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach((item) => {
  const img = item.querySelector('img');
  const caption = item.querySelector('h3').textContent;

  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
    modalImg.alt = caption;
  });
});

const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
