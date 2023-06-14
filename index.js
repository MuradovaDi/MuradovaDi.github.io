import {input, addRandom} from "./random.js";
import {addSet} from "./set.js";

// DOM variables
const button = document.getElementById('btn');



button.addEventListener('click', function() {
    const inputValue = input.value;
    if (inputValue === "") {
        return;
    }
    
    addSet();
    input.value = "";
});

