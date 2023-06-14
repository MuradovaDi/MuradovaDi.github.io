import {input} from "./random.js";

// Variables
const arrayOutput = document.getElementById('array-output');
const array = new Array();

//Add to array
function addArray() {
    array.push(input.value);
    arrayOutput.textContent = array;
}

export {array, addArray};