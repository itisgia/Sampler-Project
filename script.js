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
plainPetals[0].addEventListener('mouseover', function(){playAudio(0);}, false);
plainPetals[0].addEventListener('mouseout', function(){stopAudio(0);}, false);

plainPetals[1].addEventListener('mouseover', function(){playAudio(1);}, false);
plainPetals[1].addEventListener('mouseout', function(){stopAudio(1);}, false);

plainPetals[2].addEventListener('mouseover', function(){playAudio(2);}, false);
plainPetals[2].addEventListener('mouseout', function(){stopAudio(2);}, false);

plainPetals[3].addEventListener('mouseover', function(){playAudio(3);}, false);
plainPetals[3].addEventListener('mouseout', function(){stopAudio(3);}, false);

plainPetals[4].addEventListener('mouseover', function(){playAudio(4);}, false);
plainPetals[4].addEventListener('mouseout', function(){stopAudio(4);}, false);

plainPetals[5].addEventListener('mouseover', function(){playAudio(5);}, false);
plainPetals[5].addEventListener('mouseout', function(){stopAudio(5);}, false);

plainPetals[6].addEventListener('mouseover', function(){playAudio(6);}, false);
plainPetals[6].addEventListener('mouseout', function(){stopAudio(6);}, false);

plainPetals[7].addEventListener('mouseover', function(){playAudio(7);}, false);
plainPetals[7].addEventListener('mouseout', function(){stopAudio(7);}, false);
//
//plainPetals[3].addEventListener('mouseover', ('mouseover', function(){playAudio(3);}, false);

function stopAudio(arrayNo){
    setTimeout(function(){
        yellowPetals[arrayNo].style.display = "none";
        audioArray[arrayNo].pause();
    }, 11000);
}
// END test

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
    }
}
createAudioEl();
console.log(audioArray);



})(); //END IIFE


