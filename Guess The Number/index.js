let random=parseInt(Math.random()*100+1)
const button=document.querySelector('.button');
const userInput=document.querySelector('#guess');
const previous=document.querySelector('#previousguess');
const remaining=document.querySelector('#Remaining');
const loworhigh=document.querySelector('.loworhi');
const startover=document.querySelector('.showingpara');


let p=document.createElement('p')

let prevguess=[]
let numbguesses=1


let playgame=true;
if(playgame){
    button.addEventListener('click',function(e){
        e.preventDefault()
        const userguess=parseInt(userInput.value)
        validateguess(userguess)
    });
}
//validate that input is in between 1 and 100
function validateguess(userguess){
if(isNaN(userguess)){
    alert('please enter a valid number')
}
else if(userguess<1){
    alert('please enter a number greater than 1')
}
else if(userguess>100){
    alert('please enter a number less than 100')
}
else{
    prevguess.push(userguess)
    if(numbguesses===11){
        displayguess(userguess)
        displaymessage(`Game over. Random number was  ${random}`)
        endgame()
    }
    else{
        displayguess(userguess)
        checkguess(userguess)
    }
}
}
//check guess whether it is equal to random number and use display message based on this whether you win or low or high
function checkguess(userguess){
if(userguess===random){
    displaymessage(`You guessed it right 🎉🎉🎉`)
    endgame()
}else if(userguess<random){
    displaymessage(`Number is TOO Low`)
}else if(userguess>random){
     displaymessage(`Number is TOO High`)
}
}
//shows remaining and previous guesses
function displayguess(userguess){
userInput.value=''
previous.innerHTML+=`${userguess }  `
numbguesses++;
remaining.innerHTML=`${11-numbguesses}`
}
//display low or high
function displaymessage(message){
loworhigh.innerHTML=`<h2>${message}</h2>`
}
function newgame(){
const newgamebutton=document.querySelector('#newgame')
newgamebutton.addEventListener('click',function(e){
     random=parseInt(Math.random()*100+1);
     prevguess=[]
     numbguesses=1
     remaining.innerHTML=`${11-numbguesses}`
     userInput.removeAttribute('disabled')
     previous.innerHTML=''
     loworhigh.innerHTML=''
     startover.removeChild(p)
     playgame=true

})
}
function endgame(){
userInput.value=''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<h2 id="newgame">Start new Game</h2>`;
p.setAttribute('style', 'display:inline-block; padding:5px 10px; font-size:14px; background:#4CAF50; color:white; border-radius:5px; cursor:pointer;')
startover.appendChild(p);
playgame=false
newgame()
}


