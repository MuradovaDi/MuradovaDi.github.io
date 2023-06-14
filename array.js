import {input} from "./random.js";

// Variables
const arrayOutput = document.getElementById('array-output');
const array = new Array();

//Add to array
function addArray() {
    const inputSpace = input.value.trim();
    array.push(input.value);
    arrayOutput.textContent = array;
}

export {array, addArray};