
// get the menu icon 

// const menu = document.getElementById('menu');
const navLinks = document.querySelector('.links');
const navBar = document.querySelector('.nav-bar');
const buttons = document.querySelectorAll('.btn');

const testBtn = document.querySelector('.test')

menu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    // navBar.classList.toggle('show-nav')
})

testBtn.addEventListener('touchstart', () => {
    testBtn.classList.add('touched');
})

testBtn.addEventListener('touchend', () => {
    testBtn.classList.remove('touched');
})

// buttons.forEach(button => {
//     button.addEventListener('touchstart', () =>{
//         button.classList.add('test-touch')
//     })
// })
