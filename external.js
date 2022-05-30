function computerPlay(){
    let choice = ["rock","paper","scissors"];
    let random = choice[Math.floor(Math.random() * choice.length)];
    return random;
}

let computerPoints = 0;
let playerPoints = 0;