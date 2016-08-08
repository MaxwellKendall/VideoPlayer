//When buttons are clicked, do the video method that correspon

// OBJECTS, CORRESPONDING FUNCTIONS & EVENT LISTENERS:

    // (1) Buttons

        // a. OBJECT:

            var buttons = {
                play: document.getElementById("play"),
                volume: document.getElementById("volume"),
                fScreen: document.getElementById("fscreen")
            };

        // b. FUNCTIONS:
            function xyz(){
                console.log('x');
                // create one function for each button
            }

            function playVideo(){
                video.element.play();
            }

        // c. EVENT LISTENERS:

            buttons.play.addEventListener("click", playVideo, false)
            buttons.volume.addEventListener("click", xyz, false)
            buttons.fScreen.addEventListener("click", xyz, false)

    // (2) Transcript

        // a. OBJECT:

            var transcript = {
                element1: document.getElementsByTagName("p")[0].innerHTML,
                element2: document.getElementsByTagName("p")[1].innerHTML,
                isPlaying: false
            };

        // b. FUNCTIONS:

            // (1) identify when the time of certain letters is fulfilled, (2) set isPlaying to true
            // (1) add styling when isPlaying is true

        // c. EVENT LISTENERS:

    // (3) Video

        // a. OBJECT:

            var video = {
                element: document.getElementsByTagName("video")
            };

        // b. FUNCTIONS:
        // c. EVENT LISTENERS:
