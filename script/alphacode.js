function play(pera1, pera2){
    hideElement('homePage')
    hideElement("scorePage")
    showElement('playGround')


    setValue("life", 5)
    setValue('score', 0);
    gameStart()
}


function gameStart(){
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
    console.log(pressedKey, expectedKey)

    if( pressedKey === expectedKey){

       const value = getValue("score")

        const score = value + 1;

        setValue('score', score);

       gameStart();
       removeBackgroundColorById(pressedKey)
    }
    else{
        console.log('lose')
        const value = getValue('life')

        const life = value - 1;
        setValue('life', life);

        if(life == 0){
            gameOver()
        }

    }
}

document.addEventListener('keyup', keyUpEvent);