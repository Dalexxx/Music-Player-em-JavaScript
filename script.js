//referencias que estou buscando do html
const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');

//variáveis que estou criando
const JorgeBenJor = {
    songName : 'Jorge Ben Jor',
    artist : 'Big Rush',
    file : 'Jorge_Ben_Jor',   
};

const sevenk = {
    songName : '7k',
    artist : 'Yung Buda',
    file : '7k',   
};

const toxico = {
    songName : 'Toxico',
    artist : 'Dessik',
    file : 'Toxico',   
};

let isPlaying = false;
const Playlist = [JorgeBenJor, sevenk, toxico];
let index = 0;

//funções que estou criando
function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

function pauseSong(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
}

function playPauseDecider(){
    if(isPlaying === true){
        pauseSong();
    }
    else {
        playSong();
    }
}

function initializeSong(){
    cover.src = `images/${Playlist[index].file}.jpg`;
    song.src = `songs/${Playlist[index].file}.mp3`;
    songName.innerText = Playlist[index].songName;
    bandName.innerText = Playlist[index].artist;
}

function previousSong(){
    if(index === 0){
        index = Playlist.length - 1;
    }
    else{
        index -= 1;
    }
    initializeSong();
    playSong();
}
function nextSong(){
    if(index === Playlist.length - 1){
        index = 0;
    }
    else{
        index += 1;
    }
    initializeSong();
    playSong();
}

//execuções de função
initializeSong()

//addeventlistener's
play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);