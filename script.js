(function () { //IIFE

// DOM QUERIES
var plainPetals = document.getElementsByClassName('flower-plain');
var yellowPetals = document.getElementsByClassName('flower-yellow');
console.dir(plainPetals);
console.dir(yellowPetals);

// Testing the colour change onclick event
function changeColour(){
    // console.log('working');
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
    }
}
createAudioEl();
console.log(audioArray);
})(); //END IIFE
