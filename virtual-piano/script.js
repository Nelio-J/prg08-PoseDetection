// Base virtual piano code
// let pianoContainer = document.getElementsByClassName("piano-container");
// const base = "./tune/";
// window.onload = () => {
//     //24keys
//     for (let index = 1; index <= 24; index++) {
//         let div = document.createElement("div");
//         //If index <= 10, it is a black key. Otherwise, it is a white key.
//         div.classList.add("key", index <= 10 ? "black-key" : "white-key");
//         //For playing audio on click. If index <= 9, it adds 0 in front of index. Otherwise, just use the index.
//         const number = index <= 9 ? "0" + index : index;
//         div.addEventListener("click", () => {
//             //Path to the audio file.
//             new Audio(`${base}key${number}.mp3`).play();
//         });
//         pianoContainer[0].appendChild(div);
//     }
// };

// 2nd iteration of the piano code
// let pianoContainer = document.getElementsByClassName("piano-container");
// const base = "./tune/";
//
// // Key map to map keyboard keys to piano keys
// const keyMap = {
//     // Here you can define which keys correspond to which piano keys
//     "q": 1,   // First black key
//     "w": 2,   // Second black key
//     "e": 3,   // Third black key
//     "r": 4,   // Fourth black key
//     "t": 5,   // Fifth black key
//     "y": 6,   // Sixth black key
//     "u": 7,   // Seventh black key
//     "i": 8,   // Eighth black key
//     "o": 9,   // Ninth black key
//     "p": 10,  // Tenth black key
//
//     "a": 11,  // First white key
//     "s": 12,  // Second white key
//     "d": 13,  // Third white key
//     "f": 14,  // Fourth white key
//     "g": 15,  // Fifth white key
//     "h": 16,  // Sixth white key
//     "j": 17,  // Seventh white key
//     "k": 18,  // Eighth white key
//     "l": 19,  // Ninth white key
//     ";": 20,  // Tenth white key
//     "z": 21,  // Eleventh white key
//     "x": 22,  // Twelfth white key
//     "c": 23,  // Thirteenth white key
//     "v": 24   // Fourteenth white key
// };
//
// // Function to play audio for a given key number
// function playAudio(keyNumber) {
//     const number = keyNumber <= 9 ? "0" + keyNumber : keyNumber;
//     //Path to the audio file.
//     new Audio(`${base}key${number}.mp3`).play();
// }
//
// window.onload = () => {
//     //24 keys
//     for (let index = 1; index <= 24; index++) {
//         let div = document.createElement("div");
//         //If index <= 10, it is a black key. Otherwise, it is a white key.
//         div.classList.add("key", index <= 10 ? "black-key" : "white-key");
//
//         // Add click event listener to play audio. If index <= 9, it adds 0 in front of index.
//         // Otherwise, just use the index.
//         div.addEventListener("click", () => {
//             playAudio(index);
//         });
//
//         pianoContainer[0].appendChild(div);
//     }
//
//     // Add keydown event listener for keyboard control
//     document.addEventListener("keydown", (event) => {
//         // Check if the pressed key is mapped to a piano key
//         if (keyMap.hasOwnProperty(event.key)) {
//             // Prevent default behavior of the pressed key
//             event.preventDefault();
//             // Play audio corresponding to the mapped key
//             playAudio(keyMap[event.key]);
//         }
//     });
// };

// 3rd iteration of the piano code
// let pianoContainer = document.getElementsByClassName("piano-container");
// const base = "./tune/";
//
// // Object to store the state of each key
// let keyState = {};
//
// // Function to play audio for a given key number
// function playAudio(keyNumber) {
//     const number = keyNumber <= 9 ? "0" + keyNumber : keyNumber;
//     new Audio(`${base}key${number}.mp3`).play();
// }
//
// window.onload = () => {
//     //24keys
//     for (let index = 1; index <= 24; index++) {
//         let div = document.createElement("div");
//         div.classList.add("key", index <= 10 ? "black-key" : "white-key");
//         const number = index <= 9 ? "0" + index : index;
//
//         // Add click event listener to play audio
//         div.addEventListener("click", () => {
//             playAudio(index);
//         });
//
//         // Add keydown event listener for keyboard control
//         document.addEventListener("keydown", (event) => {
//             // Map keyboard keys to piano keys
//             const keyMap = {
//                 // Here you can define which keys correspond to which piano keys
//                 "q": 1,   // First black key
//                 "w": 2,   // Second black key
//                 "e": 3,   // Third black key
//                 "r": 4,   // Fourth black key
//                 "t": 5,   // Fifth black key
//                 "y": 6,   // Sixth black key
//                 "u": 7,   // Seventh black key
//                 "i": 8,   // Eighth black key
//                 "o": 9,   // Ninth black key
//                 "p": 10,  // Tenth black key
//
//                 "a": 11,  // First white key
//                 "s": 12,  // Second white key
//                 "d": 13,  // Third white key
//                 "f": 14,  // Fourth white key
//                 "g": 15,  // Fifth white key
//                 "h": 16,  // Sixth white key
//                 "j": 17,  // Seventh white key
//                 "k": 18,  // Eighth white key
//                 "l": 19,  // Ninth white key
//                 ";": 20,  // Tenth white key
//                 "z": 21,  // Eleventh white key
//                 "x": 22,  // Twelfth white key
//                 "c": 23,  // Thirteenth white key
//                 "v": 24   // Fourteenth white key
//             };
//
//             // Check if the pressed key is mapped to a piano key
//             if (keyMap.hasOwnProperty(event.key)) {
//                 // Check if the key is not already pressed
//                 if (!keyState.hasOwnProperty(keyMap[event.key])) {
//                     // Mark the key as pressed
//                     keyState[keyMap[event.key]] = true;
//                     // Play audio corresponding to the mapped key
//                     playAudio(keyMap[event.key]);
//                 }
//             }
//         });
//
//         // Add keyup event listener to reset key state
//         document.addEventListener("keyup", (event) => {
//             const keyMap = {
//                 // Here you can define which keys correspond to which piano keys
//                 "q": 1,   // First black key
//                 "w": 2,   // Second black key
//                 "e": 3,   // Third black key
//                 "r": 4,   // Fourth black key
//                 "t": 5,   // Fifth black key
//                 "y": 6,   // Sixth black key
//                 "u": 7,   // Seventh black key
//                 "i": 8,   // Eighth black key
//                 "o": 9,   // Ninth black key
//                 "p": 10,  // Tenth black key
//
//                 "a": 11,  // First white key
//                 "s": 12,  // Second white key
//                 "d": 13,  // Third white key
//                 "f": 14,  // Fourth white key
//                 "g": 15,  // Fifth white key
//                 "h": 16,  // Sixth white key
//                 "j": 17,  // Seventh white key
//                 "k": 18,  // Eighth white key
//                 "l": 19,  // Ninth white key
//                 ";": 20,  // Tenth white key
//                 "z": 21,  // Eleventh white key
//                 "x": 22,  // Twelfth white key
//                 "c": 23,  // Thirteenth white key
//                 "v": 24   // Fourteenth white key
//             };
//             // Reset the state of the released key
//             if (keyMap.hasOwnProperty(event.key)) {
//                 delete keyState[keyMap[event.key]];
//             }
//         });
//
//         pianoContainer[0].appendChild(div);
//     }
// };

// 4th iteration of the piano code
let pianoContainer = document.getElementsByClassName("piano-container");
const base = "./tune/";

// Object to store the state of each key
let keyState = {};
let audios = {};

function playAudio(keyNumber) {
    // If an audio is already playing for this key, return
    if (audios[keyNumber]) return;

    const number = keyNumber <= 9 ? "0" + keyNumber : keyNumber;
    const audio = new Audio(`${base}key${number}.mp3`);

    audio.onended = function() {
        delete audios[keyNumber]; // Remove the audio from the audios object when it ends
    };

    audio.play();
    audios[keyNumber] = audio; // Add the audio to the audios object
}

// Key map to map keyboard keys to piano keys
const keyMap = {
    "q": 1,   // First black key
    "w": 2,   // Second black key
    "e": 3,   // Third black key
    "r": 4,   // Fourth black key
    "t": 5,   // Fifth black key
    "y": 6,   // Sixth black key
    "u": 7,   // Seventh black key
    "i": 8,   // Eighth black key
    "o": 9,   // Ninth black key
    "p": 10,  // Tenth black key

    "a": 11,  // First white key
    "s": 12,  // Second white key
    "d": 13,  // Third white key
    "f": 14,  // Fourth white key
    "g": 15,  // Fifth white key
    "h": 16,  // Sixth white key
    "j": 17,  // Seventh white key
    "k": 18,  // Eighth white key
    "l": 19,  // Ninth white key
    ";": 20,  // Tenth white key
    "z": 21,  // Eleventh white key
    "x": 22,  // Twelfth white key
    "c": 23,  // Thirteenth white key
    "v": 24   // Fourteenth white key
};

// Add keydown event listener for keyboard control
document.addEventListener("keydown", (event) => {
    // Check if the pressed key is mapped to a piano key
    if (keyMap.hasOwnProperty(event.key)) {
        // Check if the key is not already pressed
        if (!keyState.hasOwnProperty(keyMap[event.key])) {
            // Mark the key as pressed
            keyState[keyMap[event.key]] = true;
            // Play audio corresponding to the mapped key
            playAudio(keyMap[event.key]);
        }
    }
});

// Add keyup event listener to reset key state
document.addEventListener("keyup", (event) => {
    // Reset the state of the released key
    if (keyMap.hasOwnProperty(event.key)) {
        delete keyState[keyMap[event.key]];
    }
});

window.onload = () => {
    //24keys
    for (let index = 1; index <= 24; index++) {
        let div = document.createElement("div");
        div.classList.add("key", index <= 10 ? "black-key" : "white-key");

        // Add click event listener to play audio
        div.addEventListener("click", () => {
            playAudio(index);
        });

        pianoContainer[0].appendChild(div);
    }
};


// Copyright 2023 The MediaPipe Authors.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//      http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { HandLandmarker, FilesetResolver } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0";
const demosSection = document.getElementById("demos");
let handLandmarker = undefined;
let runningMode = "IMAGE";
let enableWebcamButton;
let webcamRunning = false;

// Before we can use HandLandmarker class we must wait for it to finish
// loading. Machine Learning models can be large and take a moment to
// get everything needed to run.
const createHandLandmarker = async () => {
    const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm");
    handLandmarker = await HandLandmarker.createFromOptions(vision, {
        baseOptions: {
            modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
            delegate: "GPU"
        },
        runningMode: runningMode,
        numHands: 2
    });
    demosSection.classList.remove("invisible");
};
createHandLandmarker();

/********************************************************************
 // Demo 2: Continuously grab image from webcam stream and detect it.
 ********************************************************************/
const video = document.getElementById("webcam");
const canvasElement = document.getElementById("output_canvas");
const canvasCtx = canvasElement.getContext("2d");

window.addEventListener('resize', () => {
    video.width = window.innerWidth;
    video.height = window.innerHeight;
    canvasElement.width = video.videoWidth;
    canvasElement.height = video.videoHeight;
});

// Check if webcam access is supported.
const hasGetUserMedia = () => { var _a; return !!((_a = navigator.mediaDevices) === null || _a === void 0 ? void 0 : _a.getUserMedia); };
// If webcam supported, add event listener to button for when user
// wants to activate it.
if (hasGetUserMedia()) {
    enableWebcamButton = document.getElementById("webcamButton");
    enableWebcamButton.addEventListener("click", enableCam);
}
else {
    console.warn("getUserMedia() is not supported by your browser");
}
// Enable the live webcam view and start detection.
function enableCam(event) {
    if (!handLandmarker) {
        console.log("Wait! objectDetector not loaded yet.");
        return;
    }
    if (webcamRunning === true) {
        webcamRunning = false;
        enableWebcamButton.innerText = "ENABLE PREDICTIONS";
    }
    else {
        webcamRunning = true;
        enableWebcamButton.innerText = "DISABLE PREDICTIONS";
    }
    // getUsermedia parameters.
    const constraints = {
        video: true

    };
    // Activate the webcam stream.
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        video.srcObject = stream;
        video.addEventListener("loadeddata", predictWebcam);
    });
}
let lastVideoTime = -1;
let results = undefined;
console.log(video);
async function predictWebcam() {
    canvasElement.style.width = 1089;
    canvasElement.style.height = 720;
    canvasElement.width = 1080;
    canvasElement.height = 720;
    canvasCtx.setTransform(-1, 0, 0, 1, canvasElement.width, 0);

    // Now let's start detecting the stream.
    if (runningMode === "IMAGE") {
        runningMode = "VIDEO";
        await handLandmarker.setOptions({ runningMode: "VIDEO" });
    }
    let startTimeMs = performance.now();
    if (lastVideoTime !== video.currentTime) {
        lastVideoTime = video.currentTime;
        results = handLandmarker.detectForVideo(video, startTimeMs);
    }
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    if (results.landmarks) {
        for (const landmarks of results.landmarks) {
            drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
                color: "#00FF00",
                lineWidth: 5
            });
            drawLandmarks(canvasCtx, landmarks, { color: "#FF0000", lineWidth: 2 });

            let inputs = [];
            for (let i = 0; i < landmarks.length; i++) {
                inputs.push(landmarks[i].x);
                inputs.push(landmarks[i].y);
                inputs.push(landmarks[i].z);
            }
            classify(inputs, landmarks);
        }
    }
    canvasCtx.restore();
    // Call this function again to keep predicting when the browser is ready.
    if (webcamRunning === true) {
        window.requestAnimationFrame(predictWebcam);
    }
}

const nn = ml5.neuralNetwork({ task: 'classification', debug: true })
const modelDetails = {
    model: 'model/model.json',
    metadata: 'model/model_meta.json',
    weights: 'model/model.weights.bin'
}
nn.load(modelDetails, () => nextStep())

function nextStep(){
    console.log("het model is geladen!")
}

// Make a classification
function classify(inputs, landmarks) {
    nn.classify(inputs, (error, results) => {
        if (error) {
            console.error(error);
            return;
        }
        // console.log(results);
        displayResults(results, landmarks);
    });
}

function displayResults(results, landmarks) {
    const resultsDiv = document.getElementById('results');

    resultsDiv.textContent = '';

    // Find the result with the highest confidence
    let highestConfidenceResult = results.reduce((max, result) => max.confidence > result.confidence ? max : result);
    // console.log(highestConfidenceResult);
    console.log(landmarks);

    results.forEach(function(result) {
        let p = document.createElement('p');
        p.textContent = `${result.label}: ${(result.confidence * 100).toFixed(2)}%`;
        resultsDiv.appendChild(p);

        // If the label with the highest confidence is 'hand_point', simulate a click
        if (highestConfidenceResult.label === 'hand_point') {
            // Get the coordinates of the index fingertip
            let x = landmarks[8].x * window.innerWidth;
            let y = landmarks[8].y * window.innerHeight;

            simulateClick(x, y);
        }
    });
}

function simulateClick(x, y) {
    let targetElement = document.elementFromPoint(x, y);

    const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });

    targetElement.dispatchEvent(event);
}
