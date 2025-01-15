const MAIN = document.getElementsByTagName("main");
const INTRO_CONTAINER = document.querySelector(".introduction");
const VIEW_SONG = document.querySelector(".viewSong");
const THEME_SONG = document.querySelector(".themeSong");
const RETURN_BTN = document.querySelector(".returnButton");

VIEW_SONG.addEventListener("click", () => {
  INTRO_CONTAINER.style.display = "none";
  THEME_SONG.style.display = "block";
  RETURN_BTN.style.display = "block";
  THEME_SONG.setAttribute(
    "src",
    "https://www.youtube.com/embed/EL-D9LrFJd4?si=ABroV0uNVBNKooQx&mute=0"
  );
});

RETURN_BTN.addEventListener("click", () => {
  INTRO_CONTAINER.style.display = "grid";
  THEME_SONG.style.display = "none";
  RETURN_BTN.style.display = "none";
  THEME_SONG.setAttribute(
    "src",
    "https://www.youtube.com/embed/EL-D9LrFJd4?si=ABroV0uNVBNKooQx&mute=1"
  );
});
