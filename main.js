var videoPlayer = document.querySelector('.video-player');
var videoPlayerBtn = document.querySelector('.play-btn');
var videoPauseBtn = document.querySelector('.pause-btn');
var fullScreen = document.querySelector('.fullscreen-btn');
var videoRewindInput = document.querySelector('.rewind-input');
var videoVolumeInput = document.querySelector('.volume-input');
var currentVideoTime = document.querySelector('.current-video-time');
var fullVideoTime = document.querySelector('.full-video-time');
var volumeIcon = document.querySelector('.volume-icon');
var videoWrapper = document.querySelector('.video-wrapper');
var rek = document.querySelector('.rek');
var count = 0
var videoPlayerBtn2 = document.querySelector('.play-btn2');
var videoWrap = document.querySelector('body');
var rekImg = document.querySelector('.rek-img')

rekImg.addEventListener('click', function(){
    rek.classList.remove('active')
});

videoWrap.addEventListener('keydown', function(e){
    var f = e.key 
    if(f == 'f'){
        videoWrapper.classList.toggle('active');
        videoPlayer.classList.toggle('active');
    }
    var space = e.key;
    if(space == " "){
        // playPause();
        videoPlayer.play();
        videoPlayerBtn.innerHTML = '❚❚'
        videoPlayerBtn2.innerHTML = '❚❚'
    }
})

function playPause (){
    if (count == 0){
        count = 1;
        videoPlayer.play();
        videoPlayerBtn.innerHTML = '❚❚'
        videoPlayerBtn2.innerHTML = '❚❚'
        rek.classList.remove('active')

    }else{
        count = 0;
        videoPlayer.pause();
        videoPlayerBtn.innerHTML = '►'
        videoPlayerBtn2.innerHTML = '►'
        rek.classList.add('active')
    }
}
fullScreen.addEventListener('click', function(){
    videoWrapper.classList.toggle('active');
    videoPlayer.classList.toggle('active');
})

window.addEventListener('load',function(){
    videoPlayer.src = './assets/mov_bbb.mp4'
    videoRewindInput.value = 0;
    videoVolumeInput.value = 100;
});

videoWrapper.addEventListener('mouseenter', function(){
    document.querySelector('.video-player-controls').classList.add('active')
})

videoWrapper.addEventListener('mouseleave', function(){
    document.querySelector('.video-player-controls').classList.remove('active')
})


function playtime (){
    currentVideoTime.innerText = Math.round (videoPlayer.currentTime);
    videoRewindInput.value = (videoPlayer.currentTime*100)/videoPlayer.duration
}

videoRewindInput.addEventListener('change', function(){
    videoPlayer.currentTime = (videoRewindInput.value * videoPlayer.duration)/100;

})

videoVolumeInput.addEventListener('change', function(){
    videoPlayer.volume = videoVolumeInput.value/100;
    volumeImg(videoVolumeInput.value)
})

// videoPlayerBtn.addEventListener('click', function(){
//     playPause()
//     // videoPlayer.play();
//     // playtime
//     // fullVideoTime.innerHTML = Math.round (videoPlayer.duration);
// })

// videoPauseBtn.addEventListener('click', function(){
//     videoPlayer.pause();
// })

setInterval(function(){
    // playtime();
    seektimeupdate();
        // fullVideoTime.innerHTML = Math.round (videoPlayer.duration);

}, 1000)

function volumeImg (icon){
    switch(true){
        case icon > 75:
            volumeIcon.setAttribute('src', "./images/volume-up-interface-symbol-1.svg");
            break;
        case (icon < 75) && (icon > 50):
            volumeIcon.setAttribute('src', "./images/volume-up-interface-symbol-2.svg");
            break;
        case (icon < 50) && (icon > 25):
            volumeIcon.setAttribute('src', "./images/volume-up-interface-symbol-3.svg");
            break;
        case icon < 25:
            volumeIcon.setAttribute('src', "./images/volume-up-interface-symbol-4.svg");
            break;
        default:
        volumeIcon.setAttribute('src', "./images/volume-up-interface-symbol-1.svg");

    }
};


function seektimeupdate(){
	var nt = videoPlayer.currentTime * (100 / videoPlayer.duration);
	videoRewindInput.value = nt;
	var curmins = Math.floor(videoPlayer.currentTime / 60);
    var cursecs = Math.floor(videoPlayer.currentTime - curmins * 60);
    var curhour = Math.floor(videoPlayer.currentTime / 3600)
	var durmins = Math.floor(videoPlayer.duration / 60);
    var dursecs = Math.floor(videoPlayer.duration - durmins * 60);
    var durhuor = Math.floor(videoPlayer.duration / 3600);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
    if(dursecs < 10){ dursecs = "0"+dursecs; }
    if(durmins < 10){ durmins = "0"+durmins; }
    if(durmins > 60){ durmins = Math.floor(videoPlayer.duration / 60) - 60;}
    if(curmins > 60){ curmins = Math.floor(videoPlayer.currentTime / 60) - 60;}
    if(curhour > 1){ curmins =  (Math.floor(videoPlayer.currentTime / 60) - 120);}
    if(curmins < 10){ curmins = "0"+ curmins}
    if(durhuor > 1){ durmins = '0' + (Math.floor(videoPlayer.duration / 60) - 120);}
	currentVideoTime.innerHTML =curhour+ ':'+ curmins+":"+cursecs;
    fullVideoTime.innerHTML =durhuor +':'+ durmins+":"+dursecs;
    // return durmins;
}
