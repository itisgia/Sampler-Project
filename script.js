(function () { //IIFE

// DOM QUERIES
var plainPetals = document.getElementsByClassName('flower-plain');
var yellowPetals = document.getElementsByClassName('flower-yellow');
console.dir(plainPetals);
console.dir(yellowPetals);

// Testing the colour change onclick event
function playAudio(arrayNo){
    console.log('working');
    yellowPetals[arrayNo].style.display = "block";
    audioArray[arrayNo].play();
}

function stopAudio(arrayNo){
    setTimeout(function(){
        yellowPetals[arrayNo].style.display = "none";
        audioArray[arrayNo].pause();
    }, 11000);
}

// Store audio elements into an array
var audioArray = [];

// Create audio elements with a loop and store them into audioArray
function createAudioEl(){
    for  (var i = 0; i < plainPetals.length; i++){
        var audioObj = new Audio();
        audioObj.src = 'media/audio'+i+'.wav';
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


})(); //END IIFE
