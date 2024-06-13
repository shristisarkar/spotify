console.log("Welcome to Spotify")

let songIndex = 0;
let audioElement = new Audio('12.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressIndicator = document.getElementById('progressIndicator');
let gif = document.getElementById('gif');
let songs = [
    {songName: "Out like a light", filePath: "songs/12.mp3",coverPath:"covers/1.jpg"},
    {songName: "Out like a light", filePath: "song/12.mp3",coverPath:"11.jpg"},
    {songName: "Out like a light", filePath: "song/12.mp3",coverPath:"11.jpg"},
    {songName: "Out like a light", filePath: "song/12.mp3",coverPath:"11.jpg"},
    {songName: "Out like a light", filePath: "song/12.mp3",coverPath:"11.jpg"},
    {songName: "Out like a light", filePath: "song/12.mp3",coverPath:"11.jpg"},
    {songName: "Out like a light", filePath: "song/12.mp3",coverPath:"11.jpg"},
    {songName: "Out like a light", filePath: "song/12.mp3",coverPath:"11.jpg"},
    {songName: "Out like a light", filePath: "song/12.mp3",coverPath:"11.jpg"},

]

// audioElement.play();
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    //update seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
progressIndicator.value=progress;
})