const MUSIC_BUTTONS = document.querySelectorAll('.playBtn');
let currentSong = null;
let isPlaying = false;
//audio files
const catsOnMars = new Audio("music/catsOnMars.mp3");
const goodnightJulia = new Audio("music/goodnightJulia.mp3");
const NYRush = new Audio("music/NYRush.mp3");
const seeYouSpaceCowboys = new Audio("music/seeYouSpaceCowboys.mp3");
const spaceLion = new Audio("music/spaceLion.mp3");
const tank = new Audio('music/tank.mp3');
const theRealFolkBlues = new Audio("music/theRealFolkBlues.mp3");
const whatPlanetIsThis = new Audio("music/whatPlanetIsThis.mp3");
let soundtracks = [tank, catsOnMars, seeYouSpaceCowboys, theRealFolkBlues, whatPlanetIsThis, goodnightJulia, NYRush, spaceLion];


for (let i = 0; i < MUSIC_BUTTONS.length; i++) { 
    MUSIC_BUTTONS[i].addEventListener('click', () => {
        if (currentSong !== null) {
            currentSong.pause();
            currentSong.currentTime = 0; 
            isPlaying = false;
        }
        if (currentSong !== soundtracks[i]) {
            soundtracks[i].play();
            isPlaying = true;
            currentSong = soundtracks[i];
        } else {
            currentSong = null;
        }
        if (isPlaying) {
            MUSIC_BUTTONS[0].setAttribute('name', 'play');
            MUSIC_BUTTONS[1].setAttribute('name', 'play');
            MUSIC_BUTTONS[2].setAttribute('name', 'play');
            MUSIC_BUTTONS[3].setAttribute('name', 'play');
            MUSIC_BUTTONS[4].setAttribute('name', 'play');
            MUSIC_BUTTONS[5].setAttribute('name', 'play');
            MUSIC_BUTTONS[6].setAttribute('name', 'play');
            MUSIC_BUTTONS[7].setAttribute('name', 'play');
            MUSIC_BUTTONS[i].setAttribute('name', 'pause-outline');
        } 
        else {
            MUSIC_BUTTONS[i].setAttribute('name', 'play');
        }
    });
}



