var score = 0;
var game;
var bot;

function play(player){
    let bot2 = Math.floor(Math.random() * 6 + 1)
    
    if(bot2 == 1 || bot2 == 4){
        bot = "stone"
    }
    else if(bot2 == 2 || bot2 == 5){
        bot = "paper"
    }
    else{
        bot = "knife"
    }
    document.getElementById("botl").innerHTML = "BOT: " + bot
    let F = player
    
    if(F == bot){
        document.getElementById("gamel").innerHTML = "DRAW"
    }
    else{
        if(F == "stone" && bot == "knife"){
            document.getElementById("gamel").innerHTML = "WIN :)"
            score = score + 1
        }
        else if(F == "knife" && bot == "paper"){
            document.getElementById("gamel").innerHTML = "WIN :)"
            score += 1
        }
        else if(F == "paper" && bot == "stone"){
            document.getElementById("gamel").innerHTML = "WIN :)"
            score = score - 1
        }
        else if(F == "stone" && bot == "paper"){
            document.getElementById("gamel").innerHTML = "LOSE :("
            score = score - 1
        }
        else if(F == "knife" && bot == "stone"){
            document.getElementById("gamel").innerHTML = "LOSE :("
            score -= 1
        }
        else if(F == "paper" && bot == "knife"){
            document.getElementById("gamel").innerHTML = "LOSE :( "
            score = score - 1
        }
        else{
            console.log("ERROR")
        }
    }
    document.getElementById("scorel").innerHTML ="SCORE:" + score;
}

document.getElementById("stoneb").onclick = function(){
    play("stone")
}
document.getElementById("paperb").onclick = function(){
    play("paper")
}
document.getElementById("knifeb").onclick = function(){
    play("knife")
}
document.getElementById("restartb").onclick = function(){
    score = 0
    document.getElementById("gamel").innerHTML = "RESTART>_"
    document.getElementById("scorel").innerHTML = "SCORE:"  +score
    document.getElementById("botl").innerHTML = "BOT: >_"
}