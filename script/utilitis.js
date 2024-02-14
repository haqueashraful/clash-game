function showElement(id){
    const page = document.getElementById(id);
    page.classList.remove('hidden');
}

function hideElement(id){
    const page = document.getElementById(id);
    page.classList.add('hidden');
}

function getTextById(elementId){
    const element = document.getElementById(elementId);
   const text = element.innerText;
   const Text = text.toLowerCase()
   return Text; 
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

function getValue(elementId){
    const element = document.getElementById(elementId);
    const currentElementText = element.innerText;
    const value = parseInt(currentElementText);

    return value;
}

function setValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}

function gameOver(){
    
    hideElement('playGround')
    showElement('scorePage')
    
    const finalScore = getValue('score');
    setValue('final-score', finalScore)
    const lastElement = getTextById('random-alpha');
    removeBackgroundColorById(lastElement)
}

