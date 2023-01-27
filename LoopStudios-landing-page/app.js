let menuOpen = document.getElementById('hamburger-menu');
let navbar = document.getElementById('navbar');
let menuClose = document.getElementById('close-menu');
menuOpen.addEventListener('click', function () {
    navbar.classList.add('active');
})

menuClose.addEventListener('click', function () {
    navbar.classList.remove('active');
})