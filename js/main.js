//When buttons are clicked, do the video method that correspon

var buttons = {
    play: document.getElementById("play"),
    volume: document.getElementById("volume"),
    fScreen: document.getElementById("fscreen")
};
function xyz(){
    console.log('x');
    // create one function for each button
}
buttons.play.addEventListener("click", xyz, false)
buttons.volume.addEventListener("click", xyz, false)
buttons.fScreen.addEventListener("click", xyz, false)
