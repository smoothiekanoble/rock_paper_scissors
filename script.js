let hscore = 0;
let cscore = 0;
function getComputerChoice() {
    let out = Math.floor(Math.random() * 3);
    return (out == 0) ? "rock" : (out == 1) ? "paper" : "scissor";
}
// function getHumanChoice() {
//     let choice = prompt("What's your choice?");
//     return choice.toLowerCase();
// }
function win(choice, comp, i){
    hscore++;
    console.log(`${i}. ${choice} beats ${comp}`);
}
function loss(choice, comp, i){
    cscore++;
    console.log(`${i}. ${comp} beats ${choice}`);
}
function tie(choice, i){
    console.log(`${i}. ${choice} ties ${choice}`);
}
function playRound(choice){
    if (hscore >= 5 || cscore >= 5) return;
    //let choice = getHumanChoice();
    let comp = getComputerChoice();
    console.log(`Computer chooses ${comp}`);
    if (choice === comp){
        tie(choice, round);
    } else if (choice === "rock"){
        if (comp == "paper")
            loss(choice, comp, round);
        else
            win(choice, comp, round);
    } else if (choice === "paper"){
        if (comp == "scissor")
            loss(choice, comp, round);
        else
            win(choice, comp, round);
    } else if (choice === "scissor"){
        if (comp == "rock")
            loss(choice, comp, round);
        else
            win(choice, comp, round);
    } else{
        round--;
        console.log("Choose either rock, paper, or scissor.");
    }
    console.log(`Score: User- ${hscore} Computer- ${cscore}`);
    round++;
    if (hscore >= 5 || cscore >= 5) {
        announceWinner();
    }
}

function announceWinner() {
    if (hscore > cscore) {
        console.log(`You won ${hscore} to ${cscore}!`);
    } else if (cscore > hscore) {
        console.log(`You lose ${cscore} to ${hscore}...`);
    }
    document.getElementById("rock").removeEventListener('click', buttonClick);
    document.getElementById("paper").removeEventListener('click', buttonClick);
    document.getElementById("scissor").removeEventListener('click', buttonClick);
}
let round = 0;

function buttonClick(event) {
    const choice = event.target.id;
    playRound(choice);
}


document.getElementById("rock").addEventListener('click', buttonClick);
document.getElementById("paper").addEventListener('click', buttonClick);
document.getElementById("scissor").addEventListener('click', buttonClick);



// if (hscore > cscore){
//     console.log(`You won ${hscore} to ${cscore}!`);
// } else if (cscore > hscore){
//     console.log(`You lose ${cscore} to ${hscore}...`);
// } else{
//     while (hscore == cscore){
//         console.log("Sudden death! Deuces!");
//         for (let i = 1; i <= 2; i++){
//             choice = getHumanChoice();
//             comp = getComputerChoice();
//             console.log(`Computer chooses ${comp}`);
//             if (choice === comp){
//                 tie(choice, i);
//                 i--;
//             } else if (choice == "rock"){
//                 if (comp == "paper")
//                     loss(choice, comp, i);
//                 else
//                     win(choice, comp, i);
//             } else if (choice == "paper"){
//                 if (comp == "scissor")
//                     loss(choice, comp, i);
//                 else
//                     win(choice, comp, i);
//             } else if (choice == "scissor"){
//                 if (comp == "rock")
//                     loss(choice, comp, i);
//                 else
//                     win(choice, comp, i);
//             } else{
//                 i--;
//                 console.log("Choose either rock, paper, or scissor.");
//             }
//             console.log(`Score: User- ${hscore} Computer- ${cscore}`);
//         }
//     }
//     if (hscore > cscore){
//         console.log(`You won ${hscore} to ${cscore}!`);
//     } else
//         console.log(`You lose ${cscore} to ${hscore}...`);
// }