(function () { //IIFE

// DOM QUERIES
var plainPetals = document.getElementsByClassName('flower-plain');
var yellowPetals = document.getElementsByClassName('flower-yellow');
console.dir(plainPetals);
console.dir(yellowPetals);

// Testing the colour change onclick event
function changeColour(){

    // console.log('working');

    console.log('working');

    yellowPetals[0].style.display = "block";
};

// END test

// Store audio elements into an array
var audioArray = [];

// Create audio elements with a loop and store them into audioArray
function createAudioEl(){
    for  (var i = 0; i < plainPetals.length; i++){
        var audioObj = new Audio();
        audioObj.src = 'media/audio'+i+'.wav';

        console.log(audioObj);
        audioArray.push(audioObj);

        audioObj.setAttribute('loop', 'loop');
        console.log(audioObj);
        audioArray.push(audioObj);
        clickEventListener(i);

    }
}
createAudioEl();
console.log(audioArray);



//play audios
function audioPlay(arrayNo){
      yellowPetals[arrayNo].style.display = "block";
      audioArray[arrayNo].play();
}

// pause audios with setTimeout function
function audioPause(arrayNo){
  setTimeout(function(){
    yellowPetals[arrayNo].style.display = "none";
    audioArray[arrayNo].pause();
  }, 11000);
}

//addEventListener loop
function clickEventListener(Nun){
    plainPetals[Nun].addEventListener('mouseover', function(){audioPlay(Nun)}, false);
    plainPetals[Nun].addEventListener('mouseover', function(){audioPause(Nun)}, false);
}
//
// plainPetals[0].addEventListener('mouseover', function(){audioPlay(0)}, false);
// plainPetals[0].addEventListener('mouseover', function(){audioPause(0)}, false);
// plainPetals[1].addEventListener('mouseover', function(){audioPlay(1)}, false);
// plainPetals[1].addEventListener('mouseover', function(){audioPause(1)}, false);


})(); //END IIFE
