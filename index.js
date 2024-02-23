var audioelement = new Audio("./1.mp3");
var songIndex = 0;
var songs = [
    { songName: "", filepath: "./music/tu_hi_yar_mera.mp3" },
    { songName: "", filepath: "./music/chaleya.mp3" },
    { songName: "", filepath: "./music/lut put.mp3" },
    { songName: "", filepath: "./music/rabba rabba.mp3" },
    { songName: "", filepath: "./music/sab tera.mp3" },
    { songName: "", filepath: "./music/sajde.mp3" },
    { songName: "", filepath: "./music/tu_hi_yar_mera.mp3", }
];

document.getElementById("masterplay").addEventListener("click", function () {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");

    }
    else {
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add("fa-play");
        audioelement.pause();
    }
});
audioelement.addEventListener("timeupdate", function () {
    var progressInPercentage = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    myprogressbar.value = progressInPercentage;
});
myprogressbar.addEventListener("change", function () {
    audioelement.currentTime = ((myprogressbar.value * audioelement.duration) / 100);
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('play')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName("play")).forEach(function (element) {
    element.addEventListener("click", function (e) {
        makeAllPlay();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioelement.src = `music/${index + 1}.mp3`;
     
        audioelement.currentTime = 0;
        audioelement.play();
     
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');

    })
})

