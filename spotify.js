//Initializing variables
let songIndex=1
let audioElement=new Audio('Songs/1.mp3')
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let masterSongName=document.getElementById('masterSongName')
let songItems=Array.from(document.getElementsByClassName('songItem'))
let songs=[
    {songName: "Prada", filePath: "Songs/1.mp3", coverPath: "Covers/cover 1.jpg"},
    {songName: "Zara Zara Bahekta Hai", filePath: "Songs/2.mp3", coverPath: "Covers/cover 2.jpg"},
    {songName: "Titliaan", filePath: "Songs/3.mp3", coverPath: "Covers/cover 3.jpg"},
    {songName: "A Thousand Years", filePath: "Songs/4.mp3", coverPath: "Covers/cover 4.jpg"},
    {songName: "Zaroori Tha", filePath: "Songs/5.mp3", coverPath: "Covers/cover 5.jpg"},
    {songName: "Tum Hi Aana", filePath: "Songs/6.mp3", coverPath: "Covers/cover 6.jpg"},
    {songName: "Lut Gaye", filePath: "Songs/7.mp3", coverPath: "Covers/cover 7.jpg"},
    {songName: "Barish Ban Jaana", filePath: "Songs/8.mp3", coverPath: "Covers/cover 8.jpg"},
    {songName: "Bhula Dena", filePath: "Songs/9.mp3", coverPath: "Covers/cover 9.jpg"},
    {songName: "Tere Naal", filePath: "Songs/10.mp3", coverPath: "Covers/cover 10.jpg"},
    {songName: "Choo Lo", filePath: "Songs/11.mp3", coverPath: "Covers/cover 11.jpg"},
    {songName: "Duji Vaar Pyar", filePath: "Songs/12.mp3", coverPath: "Covers/cover 12.jpg"}
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverPath
    element.getElementsByClassName('songname')[0].innerHTML=songs[i].songName
})

//Handling play/pause buttom
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterSongName.innerText=songs[songIndex-1].songName
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-play")
        masterPlay.classList.add("fa-pause")
    }
    else{
        // makeAllPlays()
        audioElement.pause();
        gif.style.opacity=0;
        masterPlay.classList.remove("fa-pause")
        masterPlay.classList.add("fa-play")
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();//Makes other play buttons pause
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        songIndex=parseInt(e.target.id)
        audioElement.src=`songs/${songIndex}.mp3`
        audioElement.currentTime=0
        audioElement.play()
        gif.style.opacity=1;
        masterSongName.innerText=songs[songIndex-1].songName
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
    })
}))

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex=12
    }
    else songIndex--
    audioElement.src=`songs/${songIndex}.mp3`
    audioElement.currentTime=0
    audioElement.play()
    gif.style.opacity=1;
    masterSongName.innerText=songs[songIndex-1].songName
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=12){
        songIndex=1
    }
    else songIndex++
    audioElement.src=`songs/${songIndex}.mp3`
    audioElement.currentTime=0
    audioElement.play()
    gif.style.opacity=1;
    masterSongName.innerText=songs[songIndex-1].songName
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
})