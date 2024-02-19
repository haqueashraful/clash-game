const audio = new Audio();
// let isPlayClicked = true;

function play(){
    // if(isPlayClicked == false) return;
    hideElement('homePage')
    hideElement("scorePage")
    showElement('playGround')
    setValue("life", 5)
    setValue('score', 0);
    gameStart()
}


function gameStart(){
    document.addEventListener('keyup', keyUpEvent);
    const alphabet = getARandomAlphabet();
    const currentAlphabet = document.getElementById('random-alpha')
    currentAlphabet.innerText = alphabet;
    setBackgroundColorById(alphabet);
}

function keyUpEvent(e){
    const pressedKey = e.key;

    if(pressedKey == "Escape"){
        gameOver();
    }
    const currentAlphabet = document.getElementById('random-alpha');
    const currentKey = currentAlphabet.innerText;
    const expectedKey = currentKey.toLowerCase();

    if( pressedKey === expectedKey){

       const value = getValue("score")

        const score = value + 5;

        setValue('score', score);
        audio.src = '../audio/success.wav'
        audio.play();
       gameStart();
       removeBackgroundColorById(pressedKey)
    }
    else{
        console.log('lose')
        const value = getValue('life')
        audio.src = '../audio/lose.wav'
        audio.play();
        const life = value - 1;
        setValue('life', life);

        if(life == 0){
            gameOver()
        }

    }
}

