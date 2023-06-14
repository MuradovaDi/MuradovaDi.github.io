import {array, addArray} from "./array.js";

// Variables
const setOutput = document.getElementById('set-output');

//Add to set
export function addSet() {
    addArray();
    const uniqueValuesSet = new Set(array);
    const set = [...uniqueValuesSet];
    setOutput.textContent = set;
}