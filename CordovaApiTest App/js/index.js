/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        navigator.splashscreen.hide();

        var info = document.getElementById("info");

        // ----------------------------------------------------------------------------------------------------
        /*
        console.log(navigator.device.capture);
        // start audio capture
        navigator.device.capture.captureAudio(captureSuccess, captureError, {
            limit: 2
        });
        */

        // start image capture
        /*
        navigator.device.capture.captureImage(captureSuccess, captureError, {
            limit: 2
        });	
        */

        // start video capture
        /*
        navigator.device.capture.captureVideo(captureSuccess, captureError, {
            limit: 2
        });
        */

        // ----------------------------------------------------------------------------------------------------
        /*
        console.log(cordova.file);

        var fileTransfer = new FileTransfer();
        console.log(fileTransfer);

        var uri = encodeURI("http://txt2html.sourceforge.net/sample.txt");
        //var fileURL = encodeURI("file:/storage/emulated/0/download/sample.txt");
        var fileURL = encodeURI("cdvfile://localhost/persistent/download/sample.txt");
        
        info.textContent = "The file " + uri + " will be downloaded to " + fileURL + ".";
        
        fileTransfer.download(
            uri,
            fileURL,
            function (entry) {
                console.log("download complete: " + entry.toURL());
		        info.textContent += " download complete: " + entry.toURL();
            },
            function (error) {
                console.log("download error source " + error.source);
                info.textContent += " download error source " + error.source
                console.log("download error target " + error.target);
                info.textContent += " download error target " + error.target
                console.log("download error code " + error.code);
                info.textContent += " download error code " + error.code
            },
            false, {
                headers: {
                    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                }
            }
        );
        */

        // ----------------------------------------------------------------------------------------------------
        /*
              // Play the audio file at url
              var url = "cdvfile://localhost/persistent/download/Coolio-_Gangsters_Paradise.mp3";
              var media = new Media(url,
                  // success callback
                  function () {
                      console.log("playAudio():Audio Success");
                      info.textContent += " playAudio():Audio Success";
                  },
                  // error callback
                  function (err) {
                      console.log("playAudio():Audio Error: " + err);
                      info.textContent += " playAudio():Audio Error: " + err;
                  }
              );
              console.log(media);

              // Update media position every second
              var mediaPosition = document.getElementById("mediaPosition");
              var mediaTimer = setInterval(function () {
                  // get media position
                  media.getCurrentPosition(
                      // success callback
                      function (position) {
                          if (position > -1) {
                              mediaPosition.textContent = Math.round(position) + " sec";
                              //console.log((position) + " sec");
                          }
                      },
                      // error callback
                      function (e) {
                          console.log("Error getting pos=" + e);
                          info.textContent += " Error getting pos=" + e;
                      }
                  );
              }, 1000);

              // Play audio
              media.play();
              info.textContent += " Media with duration " + media.getDuration() + " seconds loaded";
              setTimeout(function () {
                      media.seekTo(60000);
                      media.setVolume(0.2);
                      setTimeout(function () {
                              media.pause();
                              setTimeout(function () {
                                      media.play();
                                      media.setVolume(0.8);
                                      setTimeout(function () {
                                              media.stop();
                                              media.release();
                                          },
                                          10000);
                                  },
                                  3000);
                          },
                          5000);
                  },
                  5000);
              */

        // ----------------------------------------------------------------------------------------------------
        /*
        // Record
        var src = "cdvfile://localhost/persistent/download/myrecording.mp3";
        var mediaRec = new Media(src,
            // success callback
            function () {
                console.log("recordAudio():Audio Success");
            },

            // error callback
            function (err) {
                console.log("recordAudio():Audio Error: " + err.code);
            });

        // Record audio
        mediaRec.startRecord();

        // Stop recording after 10 seconds
        setTimeout(function () {
            mediaRec.stopRecord();
        }, 10000);
        */

        // ----------------------------------------------------------------------------------------------------
        /*
        console.log(navigator.accelerometer);

        var accelerationInfo = document.getElementById("accelerationInfo");

        function accelerationSuccess(acceleration) {
            accelerationInfo.textContent =
                'Acceleration X: ' + acceleration.x.toFixed(2) + '\n' +
                'Acceleration Y: ' + acceleration.y.toFixed(2) + '\n' +
                'Acceleration Z: ' + acceleration.z.toFixed(2) + '\n' +
                'Timestamp: ' + acceleration.timestamp + '\n';
        }

        function accelerationError() {
            accelerationInfo.textContent = 'Acceleration error!';
        }

        var accelerationTimer = setInterval(function () {
            navigator.accelerometer.getCurrentAcceleration(accelerationSuccess, accelerationError);
        }, 100);
        */

        // ----------------------------------------------------------------------------------------------------
        document.addEventListener("pause", onPause, false);
        document.addEventListener("resume", onResume, false);
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function addInfo(text) {
    var p = document.createElement("p");
    p.textContent = text;
    info.appendChild(p);
}

function getCurrentTime() {
    var date = new Date();
    return ("0" + date.getHours()).slice(-2) + ":" +
        ("0" + date.getMinutes()).slice(-2) + ":" +
        ("0" + date.getSeconds()).slice(-2);
}

// capture callback
function captureSuccess(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;

        var info = document.getElementById("info");
        info.textContent += " " + path;

        // do something interesting with the file
    }
}

// capture error callback
function captureError(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
}

function onPause() {
    addInfo(getCurrentTime() + " -> Paused");
    setTimeout(function () {
        addInfo(getCurrentTime() + " -> Ten seconds have passed");
    }, 10000);
}

function onResume() {
    addInfo(getCurrentTime() + " -> Resumed");
}