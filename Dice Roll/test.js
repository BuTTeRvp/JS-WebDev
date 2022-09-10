let src ;
   
function diceRoll(){
    
    min = 1;
    max = 6;
    let roll = Math.floor(Math.random() * (max - min + 1) + min);
    src = `./images/dice${roll}`      
     
}
diceRoll()
console.log(src)