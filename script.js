(function () { //IIFE

// DOM QUERIES
var plainPetals = document.getElementsByClassName('flower-plain');
var yellowPetals = document.getElementsByClassName('flower-yellow');
console.dir(plainPetals);
console.dir(yellowPetals);

// Testing the colour change onclick event
function changeColour(){
    console.log('working');
    yellowPetals[0].style.display = "block";
};

plainPetals[0].addEventListener('click', changeColour, false);

})(); //END IIFE