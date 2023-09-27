"use strict";

//Informing the user that his form has been submitted.
function submitFunc() {
  alert("Your details have been submitted.");
}

//Playing and Pausing background music by Nas.
let playOrPause = 0;
let audio = new Audio("Represent.mp3");
audio.volume = 0.2;

function musicFunc() {
  if (playOrPause%2==0){
    audio.play();
  }
  else {
    audio.pause();
  }
  playOrPause++;
}

//Responding to user's website rating.
let yay = new Audio("Yay.mp3");
yay.volume = 0.2;

function rating() {
  const guestRating = document.getElementById('ratingField').value;
  if (guestRating == "" || guestRating < 0) {
    alert("Invalid input.");
  }
  else if (guestRating < 100 && guestRating >= 0) {
    alert("That's way too low! you're outta here..");
    window.location.replace("https://www.moralstories.org/learn-appreciate/");
  }
  else if (guestRating >= 100){
    yay.play();
    if (guestRating == 100) {
      alert("Thank you!");
    }
    else {
      alert("Over a 100? I wasn't aiming that high but I'll take it.");
    }
  }
}

//Revealing text only when the user scrolls down enough.
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.appear');

  for (var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

//Making the navigation bar responsive.
function navBarResponse() {
  var x = document.getElementById("navi");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
