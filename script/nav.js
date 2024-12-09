const menuIcon = document.querySelector('.menuIcon');
const closeMenuIcon = document.querySelector('.closeMenuIcon');
const mobilMenu = document.querySelector('.responsiveNav');


menuIcon.addEventListener('click', () => {
    mobilMenu.classList.toggle('revealNav');
})

closeMenuIcon.addEventListener('click', () => {
    mobilMenu.classList.toggle('revealNav');
})