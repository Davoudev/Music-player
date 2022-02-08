let title = document.querySelector(".title");
let prev = document.querySelector(".prev");
let playpause = document.querySelector(".playpause");
let next = document.querySelector(".next");
let audio = document.querySelector("audio");

const songlist = [
  {
    path: "./Musics/Ho3ein-Didgah-(Ft-EpiCure).mp3",
    songName: "Didgah",
  },
  {
    path: "./Musics/dark-netflix-theme-song.mp3",
    songName: "dark",
  },
  {
    path: "./Musics/Mohsen Chavoshi - Kojaei - Copy.mp3",
    songName: "kojaei",
  },
];

let song_playing = false;

//play song
function playsong() {
  song_playing = true;
  audio.play();
  playpause.classList.add("active")
  playpause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>'
}

//puase song
function puasesong() {
  song_playing = false;
  audio.pause();
  playpause.classList.remove("active")
playpause.innerHTML = '<ion-icon name="play-outline"></ion-icon>'
}

//play or puase song on click
playpause.addEventListener("click", () =>
  song_playing ? puasesong() : playsong()
);


function loadsong(songlist){
title.textContent = songlist.songName ; 
audio.src = songlist.path 
}

let i = 0 


loadsong(songlist[i])