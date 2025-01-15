const cursor = document.querySelector(".cursor");
const images = document.querySelectorAll("img");

function cursorControl(e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.top = `${y}px`;
  cursor.style.left = `${x}px`;
}

document.body.addEventListener("mousemove", cursorControl);

// images.forEach(images => {
//   images.addEventListener('mousemove', function() {
//     cursor.classList.add('hover-cursor');
//   })
//   images.addEventListener('mouseleave', function () {
//     cursor.classList.remove('hover-cursor');
//   })
// })
