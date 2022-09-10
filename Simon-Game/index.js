$("[type=button]").click(function(){
    buttonPress(this.id);
})



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



let startGame = function(){
    let userInput = []
    let correctInput = []
    
}