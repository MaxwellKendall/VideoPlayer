//When buttons are clicked, do the video method that corresponds with the button

var buttons = document.getElementsByTagName("button");
var playButton = buttons[0];


function xyz () {

    console.log('x');
}

playButton.addEventListener("click", xyz, false);
