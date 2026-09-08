// Image cycling for shawarma images
const images = ['shawarama1.png', 'shawarama2.png', 'shawarama3.png', 'shawarama4.png'];
let currentIndex = 0;
const shawarmaImg = document.getElementById('shawarma-img');

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  shawarmaImg.src = images[currentIndex];
}, 400);

// Navbar scroll behavior
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});