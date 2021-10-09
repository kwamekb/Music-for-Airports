/*Each instrument is an array storing objects with a note property,
the octave of the note proeprty and the location of the note property.
the instruments are stored as properites within an object "sample library"*/
/* beautify preserve:start */
const SAMPLE_LIBRARY = {
  'Grand Piano': [
    { note: 'A',  octave: 4, file: 'Samples/Grand Piano/piano-f-a4.wav' },
    { note: 'A',  octave: 5, file: 'Samples/Grand Piano/piano-f-a5.wav' },
    { note: 'A',  octave: 6, file: 'Samples/Grand Piano/piano-f-a6.wav' },
    { note: 'C',  octave: 4, file: 'Samples/Grand Piano/piano-f-c4.wav' },
    { note: 'C',  octave: 5, file: 'Samples/Grand Piano/piano-f-c5.wav' },
    { note: 'C',  octave: 6, file: 'Samples/Grand Piano/piano-f-c6.wav' },
    { note: 'D#',  octave: 4, file: 'Samples/Grand Piano/piano-f-d#4.wav' },
    { note: 'D#',  octave: 5, file: 'Samples/Grand Piano/piano-f-d#5.wav' },
    { note: 'D#',  octave: 6, file: 'Samples/Grand Piano/piano-f-d#6.wav' },
    { note: 'F#',  octave: 4, file: 'Samples/Grand Piano/piano-f-f#4.wav' },
    { note: 'F#',  octave: 5, file: 'Samples/Grand Piano/piano-f-f#5.wav' },
    { note: 'F#',  octave: 6, file: 'Samples/Grand Piano/piano-f-f#6.wav' }
  ],
  'Cor Anglais':[
    {note: 'B',  octave: 3, file: 'Samples/Cor Anglais/cor_anglais-b3-PB-loop.wav'},
    {note: 'B',  octave: 4, file: 'Samples/Cor Anglais/cor_anglais-b4-PB-loop.wav'},
    {note: 'D',  octave: 4, file: 'Samples/Cor Anglais/cor_anglais-d4-PB-loop.wav'},
    {note: 'D',  octave: 5, file: 'Samples/Cor Anglais/cor_anglais-d5-PB-loop.wav'},
    {note: 'F',  octave: 3, file: 'Samples/Cor Anglais/cor_anglais-f3-PB-loop.wav'},
    {note: 'F',  octave: 4, file: 'Samples/Cor Anglais/cor_anglais-f4-PB-loop.wav'},
    {note: 'F',  octave: 5, file: 'Samples/Cor Anglais/cor_anglais-f5-PB-loop.wav'},
    {note: 'G#',  octave: 3, file: 'Samples/Cor Anglais/cor_anglais-g#3-PB-loop.wav'},
    {note: 'G#',  octave: 4, file: 'Samples/Cor Anglais/cor_anglais-g#4-PB-loop.wav'},
  ],
  'Violas':[
    {note: 'A',  octave: 3, file: 'Samples/Violas/violas-piz-rr1-a3-PB.wav'},
    {note: 'A',  octave: 4, file: 'Samples/Violas/violas-piz-rr1-a4-PB.wav'},
    {note: 'A',  octave: 5, file: 'Samples/Violas/violas-piz-rr1-a5-PB.wav'},
    {note: 'C',  octave: 3, file: 'Samples/Violas/violas-piz-rr1-c3-PB.wav'},
    {note: 'C',  octave: 4, file: 'Samples/Violas/violas-piz-rr1-c4-PB.wav'},
    {note: 'C',  octave: 5, file: 'Samples/Violas/violas-piz-rr1-c5-PB.wav'},
    {note: 'C',  octave: 6, file: 'Samples/Violas/violas-piz-rr1-c6-PB.wav'},
    {note: 'D#',  octave: 3, file: 'Samples/Violas/violas-piz-rr1-d#3-PB.wav'},
    {note: 'D#',  octave: 4, file: 'Samples/Violas/violas-piz-rr1-d#4-PB.wav'},
    {note: 'D#',  octave: 5, file: 'Samples/Violas/violas-piz-rr1-d#5-PB.wav'},
    {note: 'F#',  octave: 3, file: 'Samples/Violas/violas-piz-rr1-f#3-PB.wav'},
    {note: 'F#',  octave: 4, file: 'Samples/Violas/violas-piz-rr1-f#4-PB.wav'},
    {note: 'F#',  octave: 5, file: 'Samples/Violas/violas-piz-rr1-f#5-PB.wav'},
  ]
};
/* beautify preserve:end */

// Return a random number between a minimum and a maximum
const randNum = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

// Notes that form a D-flat major seventh chord with an added ninth
// Note selection is important in terms of producing good combinations
/* Each loop is made up of an instrument, a note, the octave of the note, a a random duration
for how long the note will be played, and a random delay for when the note will first be played*/

/* beautify preserve:start */
const LOOPS = [
  {instrument: 'Grand Piano', note: 'F4',  duration: randNum(17,26), delay: randNum(3, 15)},
  {instrument: 'Cor Anglais', note: 'Ab4', duration: randNum(17,26), delay: randNum(3, 15)},
  {instrument: 'Violas', note: 'C5',  duration: randNum(17,26), delay: randNum(3, 15)},
  {instrument: 'Grand Piano', note: 'Db5', duration: randNum(17,26), delay: randNum(3, 15)},
  {instrument: 'Cor Anglais', note: 'Eb5', duration: randNum(17,26), delay: randNum(3, 15)},
  {instrument: 'Violas', note: 'F5',  duration: randNum(17,25), delay: randNum(3, 15)},
  {instrument: 'Grand Piano', note: 'Ab5', duration: randNum(17,26), delay: randNum(3, 15)}
];
/* beautify preserve:end */

// Canvas
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize the canvas on screen resize
const debounce = (func) => {
  let timer;
  return (event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 100, event);
  };
};

window.addEventListener(
  "resize",
  debounce(() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  })
);

let audioContext = new AudioContext();
let sampleCache = {};
// Control variable, set to start time when playing begins
let playingSince = null;

// Return a note and octave sample based on file path given
function fetchSample(path) {
  sampleCache[path] = sampleCache[path] || fetch(encodeURIComponent(path))
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer));
  return sampleCache[path];
}

// The twelve notes ("semitones") that make up an octave
const OCTAVE = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

/* Return an integer that uniquely identifies a requested note.
identify the requested octave's base note by multiplying the ocatve by 12
(For the note D3, the octave is 3 so we get 3 * 12 = 36)
Sum the product with the index of the requested note within the OCTAVE array
(For D3, 36 + 2 = 38)*/
function noteValue(note, octave) {
  return octave * 12 + OCTAVE.indexOf(note);
}

// Return the distance between two notes based on their unique integer values
function getNoteDistance(note1, octave1, note2, octave2) {
  return noteValue(note1, octave1) - noteValue(note2, octave2);
}

/* Return the note that is nearest to your requested note
from the notes available for the desired instrument within the SAMPLE_LIBRARY.*/
function getNearestSample(sampleBank, note, octave) {
  let sortedBank = sampleBank.slice().sort((sampleA, sampleB) => {
    let distanceToA = Math.abs(getNoteDistance(note, octave, sampleA.note, sampleA.octave));
    let distanceToB = Math.abs(getNoteDistance(note, octave, sampleB.note, sampleB.octave));
    return distanceToA - distanceToB;
  });
  return sortedBank[0];
}

// Turn flat notes into their equivalent sharp form so as to be useable
/* beautify preserve:start */
function flatToSharp(note) {
  switch (note) {
    case 'Bb': return 'A#';
    case 'Db': return 'C#';
    case 'Eb': return 'D#';
    case 'Gb': return 'F#';
    case 'Ab': return 'G#';
    default:   return note;
  }
}
/* beautify preserve:end */

/*Split the requested note and octave string using a regular expression into two seperate variables.
Use these variables to return the nearest note available from the desired instrument within the SAMPLE_LIBRARY*/
function getSample(instrument, noteAndOctave) {
  let [, requestedNote, requestedOctave] = /^(\w[b\#]?)(\d)$/.exec(noteAndOctave);
  requestedOctave = parseInt(requestedOctave, 10);
  requestedNote = flatToSharp(requestedNote);
  let sampleBank = SAMPLE_LIBRARY[instrument];
  let nearestSample = getNearestSample(sampleBank, requestedNote, requestedOctave);
  return fetchSample(nearestSample.file).then(audioBuffer => ({
    audioBuffer: audioBuffer,
    distance: getNoteDistance(requestedNote, requestedOctave, nearestSample.note, nearestSample.octave)
  }));
}

/* To achieve a lower note, we play the sample more slowly, and for a higher note we play it more quickly.
Once we have our desired note, given its distance, we can control the playback rate.
A zero distance gives the original playback rate, 1, since 2^0/12 = 2^0 = 1, while a distance of one returns a playback rate of 2^1/12 ≈ 1.059,
which will make the sound play slightly faster, causing our ears to perceive it as a higher note.*/
function playSample(instrument, note, destination, delaySeconds = 0) {
  getSample(instrument, note).then(({
    audioBuffer,
    distance
  }) => {
    /*The formula for the playback rate is derived from the fact that an octave is divided into 12 semitones,
    going up one semitone means multiplying the frequency by a fractional power of two: 2^1/12,
    and going up n semitones means multiplying by 2^n/12.*/
    let playbackRate = Math.pow(2, distance / 12);
    let bufferSource = audioContext.createBufferSource();

    bufferSource.buffer = audioBuffer;
    bufferSource.playbackRate.value = playbackRate / 4;

    bufferSource.connect(destination);
    // the time at which the note should start playing, relative to the AudioContext's current time
    bufferSource.start(audioContext.currentTime + delaySeconds);
  });
}

// Animate the visuals for notes playing
function render() {
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);

  context.save();
  context.translate(window.innerWidth / 2, window.innerHeight / 2);
  context.lineWidth = 30;
  context.lineCap = 'round';
  let radius = 280;
  // Create the visual represenation of the notes including their size and position
  // relative to their start, end time and duration of play
  for (const {
      duration,
      delay
    } of LOOPS) {
    const size = Math.PI * 2 / duration;
    const offset = playingSince ? audioContext.currentTime - playingSince : 0;
    const startAt = (delay - offset) * size;
    const endAt = (delay + 0.01 - offset) * size;

    // Draw a track signifiying the loops
    context.strokeStyle = '#AED6F1';
    context.beginPath();
    context.arc(0, 0, radius, 0, 2 * Math.PI);
    context.stroke();

    // Draw the notes
    context.strokeStyle = '#000';
    context.beginPath();
    context.arc(0, 0, radius, startAt, endAt);
    context.stroke();

    radius -= 35;
  }

  // Create a line signifying when a note is played
  context.strokeStyle = '#000';
  context.lineWidth = 4;
  context.moveTo(0, 0);
  context.lineTo(radius * 8.5, 0);
  context.stroke();

  if (playingSince) requestAnimationFrame(render);
  else cancelAnimationFrame(render);

  context.restore();
}

// Play a sample based on a desired instrument, note, duration of loop and start delay
function startLoop({
  instrument,
  note,
  duration,
  delay
}, nextNode) {
  playSample(instrument, note, nextNode, delay);
  return setInterval(
    () => playSample(instrument, note, nextNode, delay),
    duration * 1000
  );
}

/* Attach a ConvolverNode. It will combine the note with another sound signal
called an acoustic impulse response to achive a reveberation affect.*/
fetchSample('./PlateSuperDry.wav').then(convolverBuffer => {
  let convolver, runningLoops;

  // When the canvas is clicked, if music is already playing, stop and reset, otherwise start playing
  canvas.addEventListener('click', () => {
    if (playingSince) {
      convolver.disconnect();
      runningLoops.forEach(l => clearInterval(l));
      playingSince = null;
    } else {
      convolver = audioContext.createConvolver();
      convolver.buffer = convolverBuffer;
      convolver.connect(audioContext.destination);
      playingSince = audioContext.currentTime;
      runningLoops = LOOPS.map(loop => startLoop(loop, convolver));
    }
    render();
  });

  render();
});