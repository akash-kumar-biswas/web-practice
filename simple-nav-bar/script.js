const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const navbarbg = document.querySelector('.navbar-bg');

menuIcon.addEventListener('click', () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbarbg.classList.toggle('active');
});