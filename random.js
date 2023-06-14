// Variables
const input = document.getElementById('emotions-input');

//Start
function addRandom() {
    const randomArray = ['🐮', '🐯', '🐼', '🐨', '🐵', '🐷', '🐸'];
    const randomNum = Math.floor(Math.random() * randomArray.length);
    input.setAttribute('value', `${randomArray[randomNum]}`);
};

export {input, addRandom}