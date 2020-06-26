var videography = document.querySelector('.videography');
var audio = document.querySelector('.sound');
var about = document.querySelector(".about");
var web = document.querySelector(".web");

var webBgnd = document.querySelector("#canvas1");
var aboutHTML = document.querySelector("#about-video");
var audioSound = document.querySelector("#sound-audio");
var videographyVideo = document.querySelector("#videography-video");

var alertDisplayed = false;

//to play the sound
audio.addEventListener("mouseenter", function (event) {
    if (!alertDisplayed){
        confirm("To play sound press anywhere on the screen first");
        alertDisplayed = true;
    }
    audioSound.play();
  });

audio.addEventListener("mouseout", function (event) {
    audioSound.pause();
    audioSound.currentTime = 0;
});

//to disply the background
web.addEventListener("mouseenter", function (event) {
    webBgnd.style.display = "inline-block";
  });

web.addEventListener("mouseout", function (event) {
    webBgnd.style.display = "none";
});

//display the programming video
about.addEventListener("mouseenter", function (event) {
    aboutHTML.style.opacity = 1;
  });

about.addEventListener("mouseout", function (event) {
    aboutHTML.style.opacity = 0;
});

//display the videography video
videography.addEventListener("mouseenter", function (event) {
    videographyVideo.style.opacity = 1;
  });
videography.addEventListener("mouseout", function (event) {
    videographyVideo.style.opacity = 0;
});



window.addEventListener("load", ()=>{
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});