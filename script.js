

const menu = document.getElementById('menu');
const navLinks = document.querySelector('.links');
const navBar = document.querySelector('.nav-bar');
const buttons = document.querySelectorAll('.btn');

const testBtn = document.querySelector('.test')

menu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    // navBar.classList.toggle('show-nav')
})



