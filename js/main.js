

// a. OBJECTS:

            var buttons = {
                play: document.getElementById("play"),
                volume: document.getElementById("volume"),
                fScreen: document.getElementById("fscreen"),
                currentTime: document.getElementById("currentTime")
            };

            var transcript = {
                element1: [
                        document.getElementsByTagName("p")[0].innerHTML.substr(0, 500),
                        document.getElementsByTagName("p")[0].innerHTML.substr(500, 1000)
                ],
                element2: document.getElementsByTagName("p")[1],
                isPlaying: false
            };

            var video = {
                element: document.getElementsByTagName("video")[0],
                progress: document.getElementById("videotrack"),
                controls: document.getElementById("controls"),
                muted: false,
                fullScreen: false,
                isPlaying: false

            };

// b. FUNCTIONS:

            // Progress Bar Increase

            function setDuration() {
                var progress = document.getElementById("progressBar");
               progress.setAttribute('max', video.duration);
           }
           function progressIncrease(){
               var progressBar = document.getElementById("progressBar");
               progressBar.value = video.element.currentTime;
               progressBar.style.width = Math.floor((video.element.currentTime / video.element.duration) * 100) + '%';
            };

        // Seek function

        function seek(e) {
           var pos = (e.pageX  - this.offsetLeft) / this.offsetWidth;
           video.element.currentTime = pos * video.element.duration;
       };

            // Play Button

            function playVideo(){
                if(video.isPlaying === false){
                    video.element.play();
                    buttons.play.style.background = 'url(icons/pause-icon.png) black no-repeat center';
                    video.isPlaying = true;
                } else {
                    video.isPlaying = false;
                    video.element.pause();
                    buttons.play.style.background = 'url(icons/play-icon.png) black no-repeat center';
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

             // Highlight Transcript Function

                 function highlightTranscript (){
                     var a = document.getElementById("1");
                     var b = document.getElementById("2");
                     var c = document.getElementById("3");
                     var d = document.getElementById("4");
                     var e = document.getElementById("5");
                     var f = document.getElementById("6");
                     var g = document.getElementById("7");
                     var h = document.getElementById("8");
                     var z = document.getElementById("9");
                     var j = document.getElementById("10");
                     var k = document.getElementById("11");
                     var l = document.getElementById("12");
                     for (var i = 0; i < document.getElementsByTagName("span").length; i ++){
                         document.getElementsByTagName("span")[i].style.color = "black";
                     }
                     if(video.element.currentTime < 5){
                         a.style.color = "orange";
                     } else if (video.element.currentTime > 5 && video.element.currentTime < 10){
                                                  b.style.color = "orange";
                     } else if (video.element.currentTime > 10 && video.element.currentTime < 15){
                                                  c.style.color = "orange";
                     } else if (video.element.currentTime > 15 && video.element.currentTime < 20){
                                                  d.style.color = "orange";
                     } else if (video.element.currentTime > 20 && video.element.currentTime < 25){
                                                  e.style.color = "orange";
                     } else if (video.element.currentTime > 25 && video.element.currentTime < 30){
                                                  f.style.color = "orange";
                     } else if (video.element.currentTime > 30 && video.element.currentTime < 35){
                                                  g.style.color = "orange";
                     } else if (video.element.currentTime > 35 && video.element.currentTime < 40){
                                                  h.style.color = "orange";
                     } else if (video.element.currentTime > 40 && video.element.currentTime < 45){
                                                  z.style.color = "orange";
                     } else if (video.element.currentTime > 45 && video.element.currentTime < 50){
                                                  j.style.color = "orange";
                     } else if (video.element.currentTime > 50 && video.element.currentTime < 55){
                         k.style.color = "orange";
                     } else if (video.element.currentTime > 55 && video.element.currentTime < 60){
                         l.style.color = "orange";
                     }
                 }

            //  Full Screen Request

                    function fullScreen(){
                        var vid = video.element;
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

            // Hiding and Showing Video on Hover

                function hoverOn(){
                        var controls = document.getElementById("controls");
                            controls.style.visibility = "visible";
                    };
                function hoverOff(){
                        var controls = document.getElementById("controls");
                        controls.style.visibility = "hidden";
                    };

        // Ended Video function

            function videoOver(){
                console.log('done');
                video.element.currentTime = 0;
                video.isPlaying = false;
                buttons.play.style.background = 'url(icons/play-icon.png) black no-repeat center';
            }

            function displayCurrentTime(){
                var x = video.element.currentTime;
                if(x < 10){
                buttons.currentTime.innerHTML = "00:0" + parseInt(x);
            }   else if (x >= 10){
                buttons.currentTime.innerHTML = "00:" + parseInt(x);
            } else if (x >= 60 && x < 70){
                buttons.currentTime.innerHTML = "01:0" + parseInt(x);
            } else if (x >= 70){
                buttons.currentTime.innerHTML = "01:" + parseInt(x);
            }
            }

// c. EVENT LISTENERS:

    // Button Events:
            buttons.play.addEventListener("click", playVideo, false)
            buttons.volume.addEventListener("click", volumeOff, false)
            buttons.fScreen.addEventListener("click", fullScreen, false)
    // Video Events
            video.element.addEventListener("timeupdate", progressIncrease, false);
            video.element.addEventListener("timeupdate", highlightTranscript, false);
            video.element.addEventListener("ended", videoOver, false);
            video.element.addEventListener("loadmetadata", setDuration, false);
            video.element.addEventListener("mouseover", hoverOn, false);
            video.element.addEventListener("mouseleave", hoverOff, false);
            video.controls.addEventListener("mouseover", hoverOn, false);
            video.controls.addEventListener("mouseleave", hoverOff, false);
            video.progress.addEventListener('click', seek, false);
            video.element.addEventListener('timeupdate', displayCurrentTime, false);
