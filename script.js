const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const play = document.getElementById('play')

songName.innerText = 'Jorge Ben Jor'
bandName.innerText = 'Big Rush'

function playSong(){
    song.play()
}

play.addEventListener('click', playSong);