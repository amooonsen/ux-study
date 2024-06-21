document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const menu = document.getElementById('menu');
  
    hamburgerIcon.addEventListener('click', function() {
      menu.classList.toggle('open');
    });
  });
  