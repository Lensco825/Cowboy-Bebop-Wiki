const CHAR_SELECTORS = document.querySelectorAll('.characterSelect');
const DROPDOWNS = document.querySelectorAll('.dropdown-content');
const cursor = document.querySelector('.cursor');


console.log("Hello!");
console.log(CHAR_SELECTORS);

CHAR_SELECTORS[0].addEventListener('click', () => {
    DROPDOWNS[0].classList.toggle('show');
})

CHAR_SELECTORS[1].addEventListener('click', () => {
    DROPDOWNS[1].classList.toggle('show');
})

CHAR_SELECTORS[2].addEventListener('click', () => {
    DROPDOWNS[2].classList.toggle('show');
})


CHAR_SELECTORS[3].addEventListener('click', () => {
    DROPDOWNS[3].classList.toggle('show');
})

document.body.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
})