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
    path: "./Musics/Sasha-Sloan-Dancing-With-Your-Ghost-128.mp3",
    songName: "Dancing-with-your-ghost",
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

function prevsong(){
  i--;
  if(i<0){
    i = songlist.length - 1
  }
  loadsong(songlist[i])
  playsong();
}
prev.addEventListener("click" , prevsong);


function nextsong(){
  i++;
  if(i > songlist.length - 1){
    i = 0
  }
  loadsong(songlist[i])
  playsong();
}
next.addEventListener("click" , nextsong);