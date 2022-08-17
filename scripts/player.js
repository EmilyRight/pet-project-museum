
const video = document.querySelector(".player-video")
const mainPlayBtn = document.querySelector(".play_main");
const togglePlay = document.querySelectorAll(".toggle-play");
const playBtn = document.querySelector(".play");
const controls = document.querySelector(".video_controls")

const ranges = document.querySelectorAll(".progress_bar");
const videoRange = document.querySelector(".video-progress-bar");
const volumeRange = document.querySelector("#volume_bar");
const fullVolume = document.querySelector(".volume");
const mutedSound = document.querySelector(".mute");

const fullscreen = document.querySelector(".fullscreen-icon");
const videoSection = document.querySelector(".video_player");



let volume = video.volume;

togglePlay.forEach((elt) => {
    elt.addEventListener("click", playVideo);
});

function playVideo() {
    const method = video.paused? "play": "pause";
    video[method]();   
    if(!video.paused) {
        playBtn.classList.add("pause");
        playBtn.classList.remove("play");
        mainPlayBtn.style.display = 'none';
    } else {
        playBtn.classList.remove("pause");
        playBtn.classList.add("play");
        mainPlayBtn.style.display = 'block'
    }
};

video.addEventListener("click", playVideo);
video.addEventListener("ended", () => {
    playBtn.classList.remove("pause");
        playBtn.classList.add("play");
        mainPlayBtn.style.display = 'block'
})
/*------------------sound----------------*/

volumeRange.addEventListener('input', videoVolume);
volumeRange.addEventListener('mousemove', videoVolume);
fullVolume.addEventListener("click", muteSound);

function videoVolume() {
    let v = this.value;
    video.volume = v / 100;
    volumeRange.style.background = `linear-gradient(to right, #710707 0%, #710707 ${v}%, #c4c4c4 ${v}%, #c4c4c4 100%)`;
    if (video.volume === 0) {
        fullVolume.classList.add("mute");
    } else {
        fullVolume.classList.remove("mute");
    }

};

function muteSound() {
    if(video.volume) {
      video.volume = 0;
      volumeRange.value = 0;
      fullVolume.classList.add("mute");
      
      volumeRange.style.background = `linear-gradient(to right, #710707 0%, #710707 0%, #c4c4c4 0%, #c4c4c4 100%)`;
    } else {
      video.volume = 0.5;
      volumeRange.value = 50;
      fullVolume.classList.remove("mute");
      volumeRange.style.background = `linear-gradient(to right, #710707 0%, #710707 50%, #c4c4c4 50%, #c4c4c4 100%)`;
    }
  }



/*--------------------------------------*/
function updateProgress(){
    const value = (video.currentTime / video.duration) * 100;
    videoRange.style.background = `linear-gradient(to right, #800000 0%, #800000 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`;
    videoRange.value = value;

};


function scrub(e) {
    video.currentTime = (e.offsetX / videoRange.offsetWidth) * video.duration;
}

/*-----------------------------------*/

function speedUpVideo() {
    video.play();
    video.playbackRate = 1.5;
};


function slowDownVideo() {
    video.play();
    video.playbackRate = 0.5;
};


function scrub(e) {
    video.currentTime = (e.offsetX / videoRange.offsetWidth) * video.duration;
}


function backToBeginning () { 
    video.currentTime = 0;
    mainPlayBtn.style.display = 'none';

};

function toTheEnd () { //сброс видео на 0:00 при нажатии "0"
    video.currentTime = video.duration;
};

function toggleScreen() {
    if (!document.fullscreenElement) {
        videoSection.requestFullscreen();
        controls.classList.add("fullscreen");
        video.classList.add("fullscreen");
        fullscreen.classList.add("off-fullscreen");
        

        
    } else if (document.fullscreenEnabled) {
        document.exitFullscreen();
        controls.classList.remove("fullscreen");
        video.classList.remove("fullscreen");
        fullscreen.classList.remove("off-fullscreen");
    }
}

function videoSlider (newUrl) {
    video.src = newUrl;
    playVideo();
    mainPlayBtn.style.display = "none";
}


/*event listeners*/


videoRange.addEventListener("click", scrub)
videoRange.addEventListener('mousemove', (e) => mousedown && scrub(e));
videoRange.addEventListener('mousedown', () => (mousedown = true));
videoRange.addEventListener('mouseup', () => (mousedown = false));
video.addEventListener("timeupdate", updateProgress);

togglePlay.forEach((elt) => {
    elt.addEventListener("click", playVideo);
});


window.addEventListener("keydown", event => {
    if (event.code == "ArrowRight" || (event.shiftKey && event.code == "Equal")) {
        video.currentTime += 5;
    } else if (event.code == "ArrowLeft") {
        video.currentTime -= 5;
    } else if (event.code == "KeyL") {
        video.currentTime += 10;
    } else if (event.code == "KeyJ") {
        video.currentTime -= 10;
    }
});
window.addEventListener("keydown", event => {
    if (event.code == "Space") {
        playVideo();
        updateButton();
        event.preventDefault();
    }
});

window.addEventListener("keydown", event => {
    if (event.code == "Numpad0" || event.code =="Digit0" || event.code == "Home" ) {
        backToBeginning();  
        video.play();
    } else if (event.code == "End") {
        toTheEnd();
    }

});

window.addEventListener("keydown", event => {
    if (event.code == "KeyM") {
        muteSound();
        console.log("m");
    }
});

window.addEventListener("keydown", event => {
    if (event.shiftKey && event.code == "Period") {
        speedUpVideo();
    } else if (event.shiftKey && event.code == "Comma") {
        slowDownVideo();
    } else if (event.code == "KeyN") {
        video.playbackRate = 1;
    }
})


fullscreen.addEventListener("click", toggleScreen)
window.addEventListener("keydown", event => {
    if (event.code == "KeyF") {
        toggleScreen();
    }
});

window.addEventListener("keydown", event => {
    if (event.code == "KeyF") {
        toggleScreen();
    }
    event.preventDefault();
});
