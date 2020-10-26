// Reshow navbar on scroll up

const nav = document.querySelector('.nav');

window.addEventListener('scroll', (e) => {
    console.log("The window has been scrolled");
})

// Hide scroll down indicator as soon as user scrolls down

// Section content fade in with scroll down page

// ----- OPEN/CLOSE HAMBURGER MENU -----

const hamburger = document.querySelector('.hamburger-div');
const navList = document.querySelector('.nav__list');
const resume = document.querySelector('.resume');
const navItem = Array.from(document.querySelectorAll('.nav__item'));
const navLink = Array.from(document.querySelectorAll('.nav__link'));
const navBar = document.querySelector('.nav');
const main = document.querySelector('main');
const hamburgerLines = Array.from(document.querySelectorAll('.hamburger-line'));

let hamburgerOpened = false;
let hamburgerOpen = false;

hamburger.addEventListener('click', () => {
    
    // First time opened
    if (!hamburgerOpened) {
        // Style bar
        navList.style.display = 'flex';
        navList.style['flex-direction'] = 'column';
        navList.style['position'] = 'absolute';
        navList.style['top'] = '15vh';
        navList.style['left'] = '2vw';

        // Style links
        navLink.forEach(link => {
            link.style['font-size'] = '2rem';
        });

        // Pad links
        navItem.forEach(item  => {
            item.style['padding-bottom'] = '8vh';
        });

        // Style resume
        resume.style['font-size'] = '2rem';

        hamburgerOpened = true;
    }

    // Subsequent opening/closes
    if (hamburgerOpen) {
        navList.style.display = 'none';
        main.style.opacity = '1';

        hamburgerLines.forEach(line => line.classList.remove('active'));
        hamburgerOpen = false;
    } else {
        navList.style.display = 'flex';
        navBar.style['z-index'] = '100';
        main.style.opacity = '.1';

        hamburgerLines.forEach(line => line.classList.add('active'));
        hamburgerOpen = true;
    }

    // Deal with clicking on links
    navLink.forEach(link => {
        link.addEventListener('click', () => {
            navList.style.display = 'none';
            main.style.opacity = '1';
    
            hamburgerLines.forEach(line => line.classList.remove('active'));
            hamburgerOpen = false;
        })
    })
})

// Add animations to languages section

const git = document.querySelector('.git');

git.addEventListener('mouseover', () => {
    git.classList.add('animate__animated')
    git.classList.add('animate__rubberBand')
})
git.addEventListener('mouseout', () => {
    git.classList.remove('animate__animated')
    git.classList.remove('animate__rubberBand')
})

const htmlIcon = document.querySelector('.html5');

htmlIcon.addEventListener('mouseover', () => {
    htmlIcon.classList.add('animate__animated')
    htmlIcon.classList.add('animate__bounce')
})
htmlIcon.addEventListener('mouseout', () => {
    htmlIcon.classList.remove('animate__animated')
    htmlIcon.classList.remove('animate__bounce')
})

const cssIcon = document.querySelector('.css3');

cssIcon.addEventListener('mouseover', () => {
    cssIcon.classList.add('animate__animated')
    cssIcon.classList.add('animate__jello')
})
cssIcon.addEventListener('mouseout', () => {
    cssIcon.classList.remove('animate__animated')
    cssIcon.classList.remove('animate__jello')
})

const sassIcon = document.querySelector('.sass');

sassIcon.addEventListener('mouseover', () => {
    sassIcon.classList.add('animate__animated')
    sassIcon.classList.add('animate__flip')
})
sassIcon.addEventListener('mouseout', () => {
    sassIcon.classList.remove('animate__animated')
    sassIcon.classList.remove('animate__flip')
})

const javascriptIcon = document.querySelector('.javascript-icon');

javascriptIcon.addEventListener('mouseover', () => {
    javascriptIcon.classList.add('animate__animated')
    javascriptIcon.classList.add('animate__tada')
})
javascriptIcon.addEventListener('mouseout', () => {
    javascriptIcon.classList.remove('animate__animated')
    javascriptIcon.classList.remove('animate__tada')
})

const rubyIcon = document.querySelector('.ruby');

rubyIcon.addEventListener('mouseover', () => {
    rubyIcon.classList.add('animate__animated')
    rubyIcon.classList.add('animate__swing')
})
rubyIcon.addEventListener('mouseout', () => {
    rubyIcon.classList.remove('animate__animated')
    rubyIcon.classList.remove('animate__swing')
})