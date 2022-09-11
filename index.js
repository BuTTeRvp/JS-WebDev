
let correctAnswer = []
let userAnswer = []
let current_level = 0;
let game_start = true;


document.addEventListener("DOMContentLoaded", function() { 
    $(document).keypress(function(){
        if (game_start){
            pickColor() ;
            $("[type=button]").click(function(){ 
                buttonPress(this.id);
            console.log("inside event lisn",userAnswer)
                userAnswer.push(this.id);

                console.log(userAnswer,userAnswer.length, correctAnswer.length)
                if (userAnswer.length ==  correctAnswer.length){
                checkAnswer()
                }
                })
            game_start = false
    }});
        
  });
 
//Button Animation + Sound
let buttonPress = function(color){

    switch (color){
        case "green":
            let green = new Audio("./sounds/green.mp3")
            $("[id = green]").addClass("pressed")
            setTimeout(function(){
                $("[id = green]").removeClass("pressed")
                },100)
                green.play()
            break

        case "red":
            let red = new Audio("./sounds/red.mp3")
            $("[id = red]").addClass("pressed")
            setTimeout(function(){
                $("[id = red]").removeClass("pressed")
                },100)
            red.play()
            break

        case "blue":
            let blue = new Audio("./sounds/blue.mp3")
            $("[id = blue]").addClass("pressed")
            setTimeout(function(){
                $("[id = blue]").removeClass("pressed")
                },100)
            blue.play()
            break
        
        case "yellow":
            let yellow = new Audio("./sounds/yellow.mp3")
            $("[id = yellow]").addClass("pressed")
            setTimeout(function(){
                $("[id = yellow]").removeClass("pressed")
                },100)
            yellow.play()
            break
        
        default:


    }}



//Selects a random color, calls buttonPress On it and push color to correctAnswer array.  
let pickColor = function(){

    console.log("pickColor called")
    let my_buttons = ["blue","green","yellow","red"]
    var current = my_buttons[Math.floor(Math.random()*my_buttons.length)];
    buttonPress(current)
    correctAnswer.push(current)
    console.log(correctAnswer)
            
    }
    
    


// let userSelection = function(){

//             console.log(correctAnswer)
//             console.log("user selection called")
//             }
           
let compareArray = function(arr1,arr2){
    if (arr1.length !== arr2.length){
        return
    }
    let correct = true
    for (let i =0; i<arr1.length;i++){
        if (arr1[i] != arr2[i]) {
            correct = false

        }
    


    }
    return correct


}              

        

let checkAnswer = function(){
    console.log("checkAnswer called")
    let correct = compareArray(correctAnswer,userAnswer)
    if(correct) {
        console.log("correct!")
        userAnswer = []
        console.log("inside check answer",userAnswer)
        pickColor();
        
    } else {
        console.log("wrong")
        correctAnswer = []
        userAnswer = []
        game_start = true;
        current_level = 0
        $("[type=button]").off('click');
        $(["body"]).addClass("game-over");
        setTimeout(function(){
            $(["body"]).removeClass("game-over")
            },500)
            let wrong_audio = new Audio("./sounds/wrong.mp3")
            wrong_audio.play()
            
    }
}
    



            

        

        




    

    


