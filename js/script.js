var videography = document.querySelector('.videography');
var audio = document.querySelector('.sound');
var about = document.querySelector(".about");


var aboutHTML = document.querySelector("#about-video");
var audioSound = document.querySelector("#sound-audio");
var videographyVideo = document.querySelector("#videography-video");
var alertDisplayed = false;


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

about.addEventListener("mouseenter", function (event) {
    aboutHTML.style.opacity = 1;
  });
about.addEventListener("mouseout", function (event) {
    aboutHTML.style.opacity = 0;
});

videography.addEventListener("mouseenter", function (event) {
    videographyVideo.style.opacity = 1;
  });
videography.addEventListener("mouseout", function (event) {
    videographyVideo.style.opacity = 0;
});