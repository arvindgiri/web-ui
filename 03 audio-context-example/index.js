var audioCtx = new (window.AudioContext || window.webkitAudioContext);
var sine = audioCtx.createOscillator();
sine.start();
sine.connect(audioCtx.destination);
