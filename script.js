let video = document.getElementById("video")
let btnpl = document.getElementById("playpause")
let audio = new Audio('Let Down _Remastered_.mp3')
let btncon = document.getElementById("btncon")

btnpl.addEventListener("click",start)


function start(){
    btnpl.removeEventListener("click",start)
    btnpl.addEventListener("click",stop)
    btnpl.innerText = "PAUSE"
    audio.play()
    video.play()
}

function stop(){
    btnpl.addEventListener("click",start)
    btnpl.removeEventListener("click",stop)
    btnpl.innerText = "PLAY"
    audio.pause()
    video.pause()
}