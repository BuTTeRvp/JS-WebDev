
document.addEventListener("DOMContentLoaded", function() { 
    $(document).keypress(function(){
    pickColor() ;})
  });




var correctAnswer = []
var userAnswer = []
var current_level = 1 
 
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

        let my_buttons = ["blue","green","yellow","red"]
        var current = my_buttons[Math.floor(Math.random()*my_buttons.length)];
        buttonPress(current)
        correctAnswer.push(current)
        userSelection()
}
    


let userSelection = function(){
    $("[type=button]").click(function(){
        buttonPress(this.id);
        userAnswer.push(this.id);
        // checkAnswer()

    })
}

let checkAnswer = function(){


    if (correctAnswer=== userAnswer){
        current_level += 1
        pickColor()
    }else{
        $(["body"]).addClass("game-over");
        setTimeout(function(){
            $(["body"]).removeClass("game-over")
            },500)
            let wrong_audio = new Audio("./sounds/wrong.mp3")
            wrong_audio.play()

        correctAnswer = []
        userAnswer = []
        current_level = 1 
    }
}

            

        

        




    

    


