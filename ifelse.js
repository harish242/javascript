let oneCard=20
let twoCard=11
let sum=oneCard+twoCard
let war=document.getElementById("h1")
console.log(war)
let man=document.getElementById("p2")
man.innerText+=oneCard+" "+twoCard
let don=document.getElementById("p3")

don.innerText+=sum

let option=document.getElementById("p1")
console.log(sum)
let message=""
function startGame(){
if(sum<=20){
    message="Do you want to draw a card"
    // console.log(message)
}
else if(sum===21){
    message="Blackjack"
    option.innerText=message
    // console.log(message)
}
else{
    message="Out from the game"
    // console.log(message)
    option.innerText=message
}

console.log(message)
}