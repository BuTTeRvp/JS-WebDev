document.addEventListener("DOMContentLoaded", updateDice);



let src;
   
function diceRoll(){
    min = 1;
    max = 6;
    let roll = Math.floor(Math.random() * (max - min + 1) + min);
    src = `./images/dice${roll}.png`;
    return src      
     
}
console.log(src)
function updateDice(){
    diceRoll()
    document.getElementById("dice1").src=diceRoll();
    document.getElementById("dice2").src=diceRoll();

}
 
