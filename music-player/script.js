const play = document.getElementById("play");
// const back = document.getElementById("play");
// const forw = document.getElementById("play"); j
  const img= document.querySelector("img")
const music= document.querySelector("audio");

let musicPlay=false;

const playMusic=()=>{
    musicPlay=true;
    music.play();
    play.classList.replace( "ri-play-circle-fill","ri-pause-circle-fill")
    img.classList.add("anime")
    
}; 
const pauseMusic= ()=>{
    musicPlay=false;
    music.pause();
    play.classList.replace("ri-pause-circle-fill" ,"ri-play-circle-fill")
    img.classList.remove("anime")
    
}; 

play.addEventListener("click",function(){
    if(musicPlay){
        pauseMusic();
    }
    else{
        playMusic();
    }
})

const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const forw = document.getElementById("forw");

const song=[{
    name:"suraj 1",
    title:"love",
    artist:"kumar sanu"
},
{
name:"suraj2",
title:"hate",
artist:"kumar"
},
{
     name:"suraj3",
title:"romantic",
artist:"kumar sanu"

},

]

//changing tha data
   const loadSong=(song)=>{
    title.textContent=song.title;
    artist.textContent=song.artist;
    music.src=`music${song
    .name} .mp3`;
    

   }
 loadSong(song);


