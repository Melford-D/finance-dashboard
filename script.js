const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.hamburger');
const menuIcon = document.querySelector('.hamburger img');
const mainPage = document.querySelector('section');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');

    // toggle close icon
    if(sidebar.classList.contains('active')) {
        menuIcon.src = './icons/close.svg';
    } else {
        menuIcon.src = './icons/hamburger.svg';
    }
});

mainPage.addEventListener('click', () => {
    sidebar.classList.remove('active');
    // change menuicon
    menuIcon.src = './icons/hamburger.svg';
});