

// a. OBJECTS:

            var buttons = {
                play: document.getElementById("play"),
                volume: document.getElementById("volume"),
                fScreen: document.getElementById("fscreen"),
            };

            var transcript = {
                element1: document.getElementsByTagName("p")[0].innerHTML,
                element2: document.getElementsByTagName("p")[1].innerHTML,
                isPlaying: false,
                property : function () {

                },
            };

            var video = {
                element: document.getElementsByTagName("video")[0],
                // currentTime: document.getElementsByTagName("video")[0].currentTime,
                //^^always returns a 0 in the console
                muted: false,
                fullScreen: false
            };

// b. FUNCTIONS:

            // Progress Bar Increase

                function progressBar(){

                    console.log(video.element.currentTime);
                    // this function is called everytime the time updates
                        // properites for currentTime, totalTime
                            // divide these two = duration remaining
                                //progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
                        // each time, we want to select a element -- namely, the progress bar -- and increase its width by percentage,
                        // allow the user to set the time of the video, "click" event handler on the progressbar
                        //https://developer.mozilla.org/en-US/Apps/Fundamentals/Audio_and_video_delivery/cross_browser_video_player
                }

            // Play Button

            function playVideo(){
                if(video.isPlaying){
                    video.isPlaying = false;
                    video.element.pause();
                    buttons.play.style.background = 'url(icons/play-icon.png) black no-repeat center';
                } else {
                video.element.play();
                buttons.play.style.background = 'url(icons/pause-icon.png) black no-repeat center';
                video.isPlaying = true;
                    }
            }

            //  Volume On & Off
            function volumeOff(){
                var vid = video.element;
                var volumeButton = buttons.volume;
                if (vid.muted){
                    vid.volume = 1.0;
                    volumeButton.style.background = 'url(icons/volume-on-icon.png) black no-repeat center';
                    vid.muted = false;

                } else {
                        vid.volume = 0.0;
                        volumeButton.style.background = 'url(icons/volume-off-icon.png) black no-repeat center';
                        vid.muted = true;
                    }
            }

            //  Full Screen Request

            function fullScreen(){
                var vid = video.element;
                console.log(vid);
                if (vid.mozRequestFullScreen) {
                     // This is how to go into fullscren mode in Firefox
                     // Note the "moz" prefix, which is short for Mozilla.
                     vid.mozRequestFullScreen();
                 } else if (vid.webkitRequestFullScreen) {
                     // This is how to go into fullscreen mode in Chrome and Safari
                     // Both of those browsers are based on the Webkit project, hence the same prefix.
                     vid.webkitRequestFullScreen();
                  }
                  // Hooray, now we're in fullscreen mode!
                 }

             // Highlight Transcript Function

                 function highlightTranscript (rangeOfTimes, subStrOfParagraph){
                     if(video.currentTime === rangeOfTimes){
                         subStrOfParagraph.style.color = "white";
                     }
                 }
                    // add styling when isPlaying is true

            // Hiding and Showing Video on Hover

                function hoverOn(){
                        var controls = document.getElementById("controls");
                            controls.style.visibility = "visible";
                    };
                function hoverOff(){
                        var controls = document.getElementById("controls");
                        controls.style.visibility = "hidden";
                    };


// c. EVENT LISTENERS:

    // Button Events:
            buttons.play.addEventListener("click", playVideo, false)
            buttons.volume.addEventListener("click", volumeOff, false)
            buttons.fScreen.addEventListener("click", fullScreen, false)
    // Video Events
            video.element.addEventListener("timeupdate", progressBar, false);
            video.element.addEventListener("mouseover", hoverOn, false);
            document.getElementById("controls").addEventListener("mouseover", hoverOn, false);
            video.element.addEventListener("mouseleave", hoverOff, false);
