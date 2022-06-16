

const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');

console.log(startScreen);

startScreen.addEventListener('click', start);

let player = {};



let keys = { ArrowUp: false, ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false }


document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
// document.addEventListener('keydown', keyDown);
// document.addEventListener('keydown', keyDown);

function keyDown(e){
    e.preventDefault();
    keys[e.key] = true;
    // console.log(e.key);
    console.log(keys);
}

function keyUp(e){
    e.preventDefault();
    keys[e.key] =  false;
    // console.log(e.key);
    console.log(keys);
}

function gamePlay(){
    console.log("hey I am clicked")
    if(player.start){
        window.requestAnimationFrame(gamePlay);
    }
    
}

function start(){
    
    gameArea.classList.remove('hide');
    startScreen.classList.add('hide');


    player.start = true;
    window.requestAnimationFrame(gamePlay);


    let car = document.createElement('div');
    car.setAttribute('class', 'car');
    // car.innerText = "hey i am your car"
    gameArea.appendChild(car);
}



