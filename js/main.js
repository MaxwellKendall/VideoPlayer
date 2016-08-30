
// a. OBJECTS:

            var buttons = {
                play: document.getElementById("play"),
                volume: document.getElementById("volume"),
                fScreen: document.getElementById("fScreen"),
                currentTime: document.getElementById("currentTime"),
                videoDuration: document.getElementById("videoDuration")
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
                progress: document.getElementById("progressBar"),
                controls: document.getElementById("controls"),
                muted: false,
                fullScreen: false,
                isPlaying: false
            };

// b. FUNCTIONS:

            // Progress Bar Increase

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

            //  Volume On & Off & Volume Adjust

            function volumeOff(){
                var vid = video.element;
                var volumeButton = buttons.volume;
                if (vid.muted){
                    vid.volume = .50;
                    document.getElementById('volumeAdjust').value = "50";
                    volumeButton.style.background = 'url(icons/volume-on-icon.png) black no-repeat center';
                    vid.muted = false;

                } else {
                        vid.volume = 0.0;
                        document.getElementById('volumeAdjust').value = "0";
                        volumeButton.style.background = 'url(icons/volume-off-icon.png) black no-repeat center';
                        vid.muted = true;
                    }
            }

            function volumeAdjust(){
                var vid = video.element;
                var volumeButton = document.getElementById('volumeAdjust');
                var x = volumeButton.value / 100;
                vid.volume = x;
                console.log(x);
                if(vid.volume === 0){
                    buttons.volume.style.background = "url(icons/volume-off-icon.png) black no-repeat center";
                } else {
                    buttons.volume.style.background = "url(icons/volume-on-icon.png) black no-repeat center";
                }
                console.log(x);
        // Add the no volume background if set to 0.02 (this is the lowest value I observed)
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
                     var m = document.getElementById("13");
                     var n = document.getElementById("14");
                     var o = document.getElementById("15");
                     var p = document.getElementById("16");
                     for (var i = 0; i < document.getElementsByTagName("span").length; i ++){
                         document.getElementsByTagName("span")[i].style.color = "black";
                     }
                     if(video.element.currentTime < 4.13){
                         a.style.color = "orange";
                     } else if (video.element.currentTime > 4.130 && video.element.currentTime < 7.535){
                          b.style.color = "orange";
                     } else if (video.element.currentTime > 7.535 && video.element.currentTime < 11.270){
                          c.style.color = "orange";
                     } else if (video.element.currentTime > 11.270 && video.element.currentTime < 13.960){
                          d.style.color = "orange";
                     } else if (video.element.currentTime > 13.960 && video.element.currentTime < 17.940){
                          e.style.color = "orange";
                     } else if (video.element.currentTime > 17.940 && video.element.currentTime < 22.370){
                          f.style.color = "orange";
                     } else if (video.element.currentTime > 22.370 && video.element.currentTime < 26.880){
                          g.style.color = "orange";
                     } else if (video.element.currentTime > 26.880 && video.element.currentTime < 30.920){
                          h.style.color = "orange";
                     } else if (video.element.currentTime > 30.920 && video.element.currentTime < 34.730){
                          z.style.color = "orange";
                     } else if (video.element.currentTime > 34.730 && video.element.currentTime < 39.430){
                          j.style.color = "orange";
                     } else if (video.element.currentTime > 39.430 && video.element.currentTime < 41.190){
                         k.style.color = "orange";
                     } else if (video.element.currentTime > 41.190 && video.element.currentTime < 46.300){
                         l.style.color = "orange";
                     }  else if (video.element.currentTime > 46.300 && video.element.currentTime < 49.270){
                         m.style.color = "orange";
                     } else if (video.element.currentTime > 49.270 && video.element.currentTime < 53.760){
                         n.style.color = "orange";
                     } else if (video.element.currentTime > 53.760 && video.element.currentTime < 57.780){
                         o.style.color = "orange";
                     }else if (video.element.currentTime > 57.780 && video.element.currentTime < 60){
                         p.style.color = "orange";
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
                            // document.getElementById('progressBarContainer').style.bottom = '43px';
                    };
                function hoverOff(){
                    // document.getElementById('progressBarContainer').style.bottom = '19px';
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
                document.getElementById('timeSeperator').innerHTML = '/';
                document.getElementById('timeSeperator').style.color = 'white';

                var x = video.element.currentTime;
                if(x < 10){
                buttons.currentTime.innerHTML = "00:0" + parseInt(x);
                } else if (x >= 10){
                buttons.currentTime.innerHTML = "00:" + parseInt(x);
                } else if (x >= 60 && x < 70){
                buttons.currentTime.innerHTML = "01:0" + parseInt(x);
                } else if (x >= 70){
                buttons.currentTime.innerHTML = "01:" + parseInt(x);
                bottons.currentTime.style.color = "white";

            }
        }

            function setDuration() {
                console.log('dasdfasdf');
                var duration = parseInt(video.element.duration);
                var time = "00:" + duration;
                buttons.videoDuration.innerText = time;
                bottons.videoDuration.style.color = "white";
                   }

// c. EVENT LISTENERS:

    // Button Events:
            buttons.play.addEventListener("click", playVideo, false)
            buttons.volume.addEventListener('click', volumeOff, false)
            document.getElementById("volumeAdjust").addEventListener("click", volumeAdjust, false)
            buttons.fScreen.addEventListener("click", fullScreen, false)
    // Video Events
            video.element.addEventListener("timeupdate", progressIncrease, false);
            video.element.addEventListener("timeupdate", highlightTranscript, false);
            video.element.addEventListener("ended", videoOver, false);
            document.getElementById('xyz').addEventListener("mouseover", hoverOn, false);
            document.getElementById('xyz').addEventListener("mouseleave", hoverOff, false);
            // video.controls.addEventListener("mouseover", hoverOn, false);
            // video.controls.addEventListener("mouseleave", hoverOff, false);
            document.getElementById('progressBarContainer').addEventListener('click', seek, false);
            video.element.addEventListener('timeupdate', displayCurrentTime, false);

    // Document Events:
            document.getElementById('xyz').addEventListener('mouseover', setDuration, false);
