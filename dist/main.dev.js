"use strict";

// document.querySelector("button").onclick = function (event)
// Store the alphabet (array? object? const?)
var morseCode = {
  a: ".-",
  b: "-... ",
  c: "-.-. ",
  d: "-.. ",
  e: ". ",
  f: "..-. ",
  g: "--. ",
  h: ".... ",
  i: ".. ",
  j: ".---",
  k: "-.- ",
  l: ".-.. ",
  m: "-- ",
  n: "-. ",
  o: "--- ",
  p: ".--. ",
  q: "--.- ",
  r: ".-. ",
  s: "... ",
  t: "- ",
  u: "..- ",
  v: "...- ",
  w: ".-- ",
  x: "-..- ",
  y: "-.-- ",
  z: "--.. "
}; //Store the morse code (array? object?)
// listener on the button listening for the 'on click'

document.getElementById("myButton").addEventListener("click", myFunction);

function myFunction(a) {
  return morseCode;
}

; // // }
// const getTextInput = () => {
//     const textInput = document.getElementById("inputtextbox").nodeValue;
//     console.log(textInput);
// }
// on click it needs to run a function which will convert english to morse
// convert english to morse - compare the letter of english and find the corresponding MORSE
// create 2 arrays, with english and morse. 
// 2)if else statements
// 3) switch statements both of these will get massive
// 4) similar to arrays but could give id for checking whats what
// 5) ...... clue: something to do with an object amd key value pairs...?