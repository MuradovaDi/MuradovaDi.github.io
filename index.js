import {input, addRandom} from "./random.js";
import {addSet} from "./set.js";

// DOM variables
const button = document.getElementById('btn');

addRandom();

button.addEventListener('click', function() {
    const inputValue = input.value;
    const inputWithoutSpace = inputValue.trim();
    
    if (inputValue === "") {
        return;
    }
    
    addSet();
    input.value = "";
});

